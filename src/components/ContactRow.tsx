import React from "react";
import * as SimpleIcons from "react-icons/si";
import * as HeroIcons2 from "react-icons/hi2";

import { Indexable } from "../interfaces/Indexable";
import {
  confirmAction,
  sendEventToGoogleAnalytics,
  setElementColor,
} from "../utils/domUtils";
import { tokenize } from "../utils/stringUtils";
import { graphql, useStaticQuery } from "gatsby";
import { CONTACT_ITEMS } from "../constants/mockDB";

type Props = {
  colorsOnHoverWithDefaultColor?: boolean | string;
  size?: number | string;
  toolTipPosition?: "top" | "bottom";
  toolTipColor?: "white" | "black";
  toolTipDisabled?: boolean;
  messagePosition?: "right" | "bottom";
};

const ContactRow = ({
  colorsOnHoverWithDefaultColor = false,
  size = 16,
  toolTipPosition = "top",
  toolTipColor = "black",
  toolTipDisabled = false,
  messagePosition = "right",
}: Props) => {
  const query = useStaticQuery(graphql`
    query AllContactItems {
      allContentfulContactItem(sort: { order: ASC }) {
        nodes {
          id
          copyToClipboard
          iconName
          title
          tooltip
          url
          color
          file {
            title
            url
          }
        }
      }
    }
  `);
  const rawItems: Queries.ContentfulContactItem[] =
    query?.allContentfulContactItem?.nodes || CONTACT_ITEMS;

  const [message, setMessage] = React.useState("");
  const defaultIconColor =
    (typeof colorsOnHoverWithDefaultColor === "string" &&
      colorsOnHoverWithDefaultColor) ||
    "inherit";
  const copyToClipboard = (subject: string, text: string) => (event: any) => {
    event.preventDefault();
    sendEventToGoogleAnalytics("link", "click", "CopyToClipboard:" + subject);
    navigator.clipboard.writeText(text);
    setMessage("Copied " + subject + " to clipboard!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flex flex-row gap-2 px-2 py-1 items-center relative">
      {rawItems.map((item) => {
        const alt = item.tooltip || `Contact me via ${item.title}`;
        const key = item.id || tokenize(item.title!);
        const Icon =
          (SimpleIcons as Indexable)[item.iconName!] ||
          (HeroIcons2 as Indexable)[item.iconName!];
        const confirmMessage =
          "This link will open " + item.title + ". Are you sure?";
        return (
          <a
            key={key}
            target="_blank"
            href={item.file?.url || item.url || "#"}
            aria-label={item.title!}
            aria-describedby={alt}
            data-tooltip={alt}
            onClick={
              (!item.file &&
                (item.copyToClipboard
                  ? copyToClipboard(item.title!, item.url!)
                  : confirmAction(confirmMessage, "Contact:" + item.title))) ||
              undefined
            }
            download={!!item.file}
            style={
              colorsOnHoverWithDefaultColor
                ? { color: defaultIconColor }
                : { color: item.color! }
            }
            data-color={item.color!}
            className={
              "contact-item transition duration-100" +
              (colorsOnHoverWithDefaultColor
                ? ""
                : " opacity-80 hover:opacity-100") +
              (toolTipDisabled ? "" : " tooltip") +
              (toolTipPosition === "bottom" ? " tooltip-bottom" : "") +
              (toolTipColor === "white" ? " tooltip-black-on-white" : "")
            }
            onMouseEnter={(event) => {
              // Forced to use js events instead of tailwind's hover:text-[#color] since it seems not to support dynamic colors
              colorsOnHoverWithDefaultColor
                ? setElementColor(event.currentTarget as HTMLElement)
                : undefined;
            }}
            onMouseLeave={
              colorsOnHoverWithDefaultColor
                ? (event) => {
                    setElementColor(
                      event.currentTarget as HTMLElement,
                      defaultIconColor
                    );
                  }
                : undefined
            }
          >
            <Icon size={size} alt={alt} />
          </a>
        );
      })}
      <span
        className={
          "text-gray whitespace-nowrap absolute" +
          (messagePosition === "bottom" ? " top-full" : " left-full")
        }
      >
        {message}
      </span>
    </div>
  );
};

export default ContactRow;
