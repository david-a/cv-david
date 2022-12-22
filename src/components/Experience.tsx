import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { formatDateMonthYear, getDateDiff } from "../utils/datetimeUtils";

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
            description
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
    <div className="p-10 bg-dark rounded">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold font-display text-green !leading-[0.6] font-mono mb-10">
        // WORK EXPERIENCE
      </h2>
      {allExperienceItems?.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap flex-row lg:grid lg:grid-cols-[2fr_0.5fr_6fr] items-center text-white  mb-20"
        >
          <div className="font-mono text-xl tracking-tight font-gray-dark">
            (
            <span className="text-yellow whitespace-nowrap">
              "{formatDateMonthYear(item.startDate!)}"
            </span>
            ,{" "}
            {!item.endDate ? (
              <span className={"text-gray"}>Present</span>
            ) : (
              <span className={"text-yellow whitespace-nowrap"}>
                "{formatDateMonthYear(item.endDate)}"
              </span>
            )}
            ):{" "}
            <span className="whitespace-nowrap">
              {"<" +
                getDateDiff(
                  item.startDate!,
                  !item.endDate ? new Date() : item.endDate
                ) +
                " Years>"}
            </span>
          </div>
          <div className="font-mono justify-self-center text-3xl lg:text-5xl px-2">
            {"=>"}
          </div>
          <div className="grid grid-cols-[0.5fr_5fr_0.5fr] items-center">
            <span className="font-mono text-[15rem] -mt-12 scale-y-150">
              {"{"}
            </span>
            <div className="font-mono">
              <div className="flex flex-row items-start">
                <div className="flex items-center justify-center w-20 mr-6 p-4">
                  {item.logo && (
                    <GatsbyImage
                      objectFit="contain"
                      image={item.logo?.gatsbyImageData!}
                      alt={item.company!}
                    />
                  )}
                </div>
                <div className="flex-1 py-2">
                  <h2 className="text-xl xl:text-2xl font-bold text-red-light">
                    {item.title}
                  </h2>
                  <h3 className="text-xl xl:text-2xl text-gray">
                    {item.company}
                  </h3>
                </div>
              </div>
              <div className="p-4">{item.description?.description || ""}</div>
            </div>
            <span className="font-mono weight-light text-[15rem] -mt-12 scale-y-150">
              {"}"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
