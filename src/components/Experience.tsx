import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { CONTENTFUL_RICH_TEXT_GATSBY_OPTIONS } from "../constants/contentfulSettings";
import { formatDateMonthYear, getDateDiff } from "../utils/datetimeUtils";
import { confirmAction, sendEventToGoogleAnalytics } from "../utils/domUtils";
import { getDomainFromUrl } from "../utils/stringUtils";

type Props = {};

const Experience = (props: Props) => {
  const query = useStaticQuery(graphql`
    query AllExperienceItems {
      allContentfulExperienceItem(sort: [{ order: ASC }, { endDate: DESC }]) {
        nodes {
          id
          title
          startDate
          endDate
          company
          companyUrl
          description {
            raw
          }
          logo {
            gatsbyImageData
            title
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
  const allExperienceItems: Queries.ContentfulExperienceItem[] =
    query?.allContentfulExperienceItem?.nodes;

  return (
    <div className="p-10 bg-dark rounded overflow-x-hidden">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold font-display text-green !leading-[0.6] font-mono mb-10">
        // WORK EXPERIENCE
      </h2>
      {allExperienceItems?.map((item) => {
        const Icon = item.logo && (
          <GatsbyImage
            objectFit="contain"
            image={item.logo?.gatsbyImageData!}
            alt={item.company!}
          />
        );
        const alt = `${item.company} Website`;
        return (
          <div key={item.id} className="items-center text-white mb-20">
            <div className="font-mono text-md md:text-xl tracking-tight font-gray-dark mb-4">
              [
              <span className="text-yellow whitespace-nowrap">
                {formatDateMonthYear(item.startDate!)}
              </span>
              {"~>"}
              {!item.endDate ? (
                <span className={"text-gray"}>Present</span>
              ) : (
                <span className={"text-yellow whitespace-nowrap"}>
                  {formatDateMonthYear(item.endDate)}
                </span>
              )}
              ]
              <span className="whitespace-nowrap">
                {"<" +
                  getDateDiff(
                    item.startDate!,
                    !item.endDate ? new Date() : item.endDate
                  ) +
                  " Years>"}
              </span>
              <span className="text-gray">{"~/$"}</span>
            </div>

            <div className="items-center">
              <div className="font-mono">
                <div className="flex flex-row items-start">
                  <div className="flex items-center justify-center w-20 md:mr-4 p-4">
                    {Icon &&
                      (item.companyUrl ? (
                        <a
                          className="opacity-90 hover:opacity-100 transition-opacity duration-200 tooltip"
                          href={item.companyUrl}
                          target="_blank"
                          data-tooltip={
                            "Open on " + getDomainFromUrl(item.companyUrl)
                          }
                          aria-label={alt}
                          aria-describedby={alt}
                          onClick={confirmAction(
                            "This link will open an external website in a new tab. Are you sure?",
                            "Experience:Logo:" + item.company
                          )}
                        >
                          {Icon}
                        </a>
                      ) : (
                        Icon
                      ))}
                  </div>
                  <div className="flex-1 py-2">
                    <h2 className="text-xl xl:text-2xl font-bold text-red-light">
                      {item.title}
                    </h2>

                    {item.companyUrl ? (
                      <a
                        className="opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200 tooltip text-xl xl:text-2xl text-gray"
                        href={item.companyUrl}
                        target="_blank"
                        data-tooltip={
                          "Open on " + getDomainFromUrl(item.companyUrl)
                        }
                        aria-label={alt}
                        aria-describedby={alt}
                        onClick={confirmAction(
                          "This link will open an external website in a new tab. Are you sure?",
                          "Experience:Name:" + item.company
                        )}
                      >
                        <h3>{item.company}</h3>
                      </a>
                    ) : (
                      <h3 className="text-xl xl:text-2xl text-gray">
                        {item.company}
                      </h3>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  {(item.description?.raw &&
                    renderRichText(
                      { raw: item.description?.raw } as any,
                      CONTENTFUL_RICH_TEXT_GATSBY_OPTIONS as any
                    )) ||
                    ""}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
