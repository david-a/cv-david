// A component which takes up a list of sentences in the form of {text, links?:[{text, link}]} and renders them as a list of sentences with links, in a trivia-card like designed container
import React from "react";
import { confirmAction } from "../utils/domUtils";
import { getColor, getDomainFromUrl } from "../utils/stringUtils";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, MARKS } from "@contentful/rich-text-types";
import { graphql, useStaticQuery } from "gatsby";

type Props = {};

const Trivia = () => {
  const query = useStaticQuery(graphql`
    query TriviaQuery {
      allContentfulTriviaItem(sort: { order: ASC }) {
        nodes {
          id
          text {
            raw
          }
          metadata {
            tags {
              name
            }
          }
        }
      }
    }
  `);
  const allTriviaItem: Queries.ContentfulTriviaItem[] =
    query?.allContentfulTriviaItem?.nodes;

  const options = {
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
        const color = getColor(specificColor || { contrast: "dark" });
        return (
          <a
            className="opacity-70 hover:opacity-100 transition-opacity duration-200 text-[0.9em] mx-2 tooltip"
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

  return (
    <div className="paper">
      <h1 className="px-20 text-xl sm:text-3xl font-mono"># Trivia Facts</h1>
      <div className="paper-pattern">
        <ol className="paper-content flex flex-col items-start justify-start list-decimal">
          <br />
          {allTriviaItem.map((item) => {
            const { raw } = item.text as any;
            return (
              <li key={item.id} className="font-display">
                <h3>{raw && renderRichText({ raw } as any, options as any)}</h3>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Trivia;
