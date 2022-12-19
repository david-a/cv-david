import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Indexable } from "../interfaces/Indexable";
import { formatDateMonthYear, getDateDiff } from "../utils/datetimeUtils";
import { objArrayToObject } from "../utils/objectUtils";
import { tokenize } from "../utils/stringUtils";

type ExperienceItem = {
  key: string;
  logo?: any;
  title: string;
  logoFile: string;
  startDate: string;
  endDate: string;
  company: string;
  description: string;
  keywords: string[];
};

const ALL_ITEMS: Partial<ExperienceItem>[] = [
  {
    title: "Independent FullStack Developer",
    company: "App & Beyond",
    logoFile: "appandbeyond.png",
    startDate: "2017-11-01",
    endDate: "present",
    description:
      "Consulting & Development (usually from scratch) of cloud based solutions for Samanage (acquired by SolarWinds), Headstream (as Co-Founder & CTO), Synamedia (formerly a Cisco subsidiary) and more, as well as few self-owned projects.",
    keywords: [
      "javascript",
      "js",
      "frontend",
      "backend",
      "scripts",
      "scripting",
      "programming",
      "language",
      "code",
      "coding",
      "node.js",
      "node",
      "ES6",
      "ECMAScript",
    ],
  },
  {
    title: "Chief Technology Officer",
    company: "Headstream",
    logoFile: "headstream.png",
    startDate: "2018-08-01",
    endDate: "2021-12-31",
    description: `IaC- AWS CDK Python/JS, AWS Cloudwatch Scheduling & Logs, 
      Databases & Search - AWS RDS/MySQL, S3 + Athena, ElasticSearch, 
      Python Scripts for Data harvesting, aggregating, analysis & ML (operated using ECS + Fargate),
      API - AWS API Gateway + Lambda, Cognito, GraphQL. AWS Lambda orchestration tasks (python),
      Frontend - React, AWS Amplify, GraphQL, Apollo.`,
    keywords: [
      "javascript",
      "js",
      "frontend",
      "backend",
      "scripts",
      "scripting",
      "programming",
      "language",
      "code",
      "coding",
      "node.js",
      "node",
      "ES6",
      "ECMAScript",
    ],
  },
];

type Props = {};

const Experience = (props: Props) => {
  const [items, setItems] = useState<ExperienceItem[]>([]);
  const query = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/^logos/" } }) {
        nodes {
          base
          childrenImageSharp {
            gatsbyImageData(
              transformOptions: { fit: CONTAIN }
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  `);
  const logos: Indexable = objArrayToObject(query.allFile.nodes, "base");
  useEffect(() => {
    setItems(fetchItems());
  }, []);

  const fetchItems = (): ExperienceItem[] => {
    return ALL_ITEMS.map((item) => {
      return {
        ...item,
        key: tokenize(item.title! + item.company!),
        logo: getImage(
          logos[item.logoFile!].childrenImageSharp[0].gatsbyImageData
        ),
      } as ExperienceItem;
    });
  };
  return (
    <div className="p-10 bg-dark rounded">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold font-display text-green !leading-[0.6] font-mono mb-10">
        // WORK EXPERIENCE
      </h2>
      {items.map((item) => (
        <div className="flex flex-wrap flex-row lg:grid lg:grid-cols-[2fr_0.5fr_6fr] items-center text-white  mb-20">
          <div className="font-mono text-xl tracking-tight font-gray-light">
            (
            <span className="text-yellow whitespace-nowrap">
              "{formatDateMonthYear(item.startDate)}"
            </span>
            ,{" "}
            {item.endDate.toLowerCase() === "present" ? (
              <span className={"text-gray"}>{item.endDate}</span>
            ) : (
              <span className={"text-yellow whitespace-nowrap"}>
                "{formatDateMonthYear(item.endDate)}"
              </span>
            )}
            ):{" "}
            <span className="whitespace-nowrap">
              {"<" +
                getDateDiff(
                  item.startDate,
                  item.endDate.toLowerCase() === "present"
                    ? new Date()
                    : item.endDate
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
            <div key={item.key} className="font-mono">
              <div className="flex flex-row items-start">
                <div className="flex items-center justify-center w-20 mr-6 p-4">
                  <GatsbyImage
                    objectFit="contain"
                    image={item.logo}
                    alt={item.company}
                  />
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
              <div className="p-4">{item.description}</div>
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
