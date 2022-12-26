import React from "react";
import { confirmAction } from "../utils/domUtils";
import { getColor, getDomainFromUrl } from "../utils/stringUtils";
import { INLINES, MARKS } from "@contentful/rich-text-types";

export const CONTENTFUL_RICH_TEXT_GATSBY_OPTIONS = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <b className="font-bold">{text}</b>,
    [MARKS.CODE]: (text: string) => <span className="font-mono">{text}</span>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      if (!children.length) return "";

      const { uri } = node.data;
      const [text, specificColor] = children[0].split("::");
      const alt = "Link to " + text;
      const color = text.startsWith("#")
        ? getColor(specificColor || { contrast: "dark" })
        : getColor("blue");
      return (
        <a
          className={
            "opacity-70 hover:opacity-100 transition-opacity duration-200 tooltip" +
            (text.startsWith("#") ? " text-[0.85em] font-display" : "")
          }
          href={uri}
          target="_blank"
          data-tooltip={"Open on " + getDomainFromUrl(uri)}
          aria-label={alt}
          aria-describedby={alt}
          onClick={confirmAction(
            "This link will open an external website in a new tab. Are you sure?"
          )}
          style={{ color }}
        >
          {text}
        </a>
      );
    },
  },
};
