import React from "react";
import * as SimpleIcons from "react-icons/si";
import { Indexable } from "../interfaces/Indexable";
import { confirmAction, setElementColor } from "../utils/domUtils";
import { tokenize } from "../utils/stringUtils";

type ContactItem = {
  key: string;
  title: string;
  icon: string;
  url: string;
  color: string;
  copyToClipboard?: boolean;
  tooltip?: string;
};

const ALL_ITEMS: Partial<ContactItem>[] = [
  {
    title: "WhatsApp",
    icon: "SiWhatsapp",
    url: "https://api.whatsapp.com/send?phone=972528717475",
    color: "#25d366",
  },
  {
    title: "Telegram",
    icon: "SiTelegram",
    url: "https://t.me/deddy_xyz",
    color: "#0088cc",
  },
  {
    title: "LinkedIn",
    icon: "SiLinkedin",
    url: "https://www.linkedin.com/in/davidavikasis/",
    color: "#0077b5",
    tooltip: "Check out my LinkedIn profile",
  },
  {
    title: "Email",
    icon: "SiGmail",
    url: "david@appandbeyond.com",
    color: "#d93025",
    copyToClipboard: true,
    tooltip: "Copy david@appandbeyond.com to your clipboard",
  },
];

type Props = {
  colorsOnHoverWithDefaultColor?: boolean | string;
  size?: number;
  toolTipPosition?: "top" | "bottom";
  toolTipColor?: "white" | "black";
};

const ContactRow = ({
  colorsOnHoverWithDefaultColor = false,
  size = 16,
  toolTipPosition = "top",
  toolTipColor = "black",
}: Props) => {
  const [message, setMessage] = React.useState("");
  const defaultIconColor =
    (typeof colorsOnHoverWithDefaultColor === "string" &&
      colorsOnHoverWithDefaultColor) ||
    "inherit";
  const copyToClipboard = (subject: string, text: string) => (event: any) => {
    event.preventDefault();
    navigator.clipboard.writeText(text);
    setMessage("Copied " + subject + " to clipboard!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      {ALL_ITEMS.map((item) => {
        const alt = item.tooltip || `Contact me via ${item.title}`;
        const key = tokenize(item.title!);
        const Icon = (SimpleIcons as Indexable)[item.icon!];
        const confirmMessage =
          "This link will open " + item.title + ". Are you sure?";

        return (
          <a
            key={key}
            target="_blank"
            href={item.url}
            aria-label={item.title}
            aria-describedby={alt}
            onClick={
              item.copyToClipboard
                ? copyToClipboard(item.title!, item.url!)
                : confirmAction(confirmMessage)
            }
            style={colorsOnHoverWithDefaultColor ? {} : { color: item.color }}
            title={alt}
            data-color={item.color}
            className={
              "transition duration-100 tooltip" +
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
      <span className="text-gray">{message}</span>
    </div>
  );
};

export default ContactRow;
