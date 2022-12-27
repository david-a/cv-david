// A component which takes up a list of sentences in the form of {text, links?:[{text, link}]} and renders them as a list of sentences with links, in a trivia-card like designed container
import React from "react";
import { confirmAction } from "../utils/domUtils";
import { getColor, getDomainFromUrl } from "../utils/stringUtils";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { graphql, useStaticQuery } from "gatsby";
import { CONTENTFUL_RICH_TEXT_GATSBY_OPTIONS } from "../constants/contentfulSettings";

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

  return (
    <div className="paper">
      <h1 className="px-10 md:px-20 text-xl sm:text-3xl font-mono">
        # Trivia Facts
      </h1>
      <div className="paper-pattern">
        <ol className="paper-content flex flex-col items-start justify-start list-decimal w-full">
          <br />
          {allTriviaItem.map((item) => {
            const { raw } = item.text as any;
            return (
              <li key={item.id} className="font-sans">
                <h3>
                  {raw &&
                    renderRichText(
                      { raw } as any,
                      CONTENTFUL_RICH_TEXT_GATSBY_OPTIONS as any
                    )}
                </h3>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Trivia;
