import React, { useEffect, useState } from "react";
import { isExternalVideo, tokenize } from "../utils/stringUtils";
import * as SimpleIcons from "react-icons/si";
import { Indexable } from "../interfaces/Indexable";
import { PORTFOLIO_ART } from "../constants/portfolioArt";
import {
  chooseRandomElement,
  objArrayToObject,
} from "../utils/arrayAndObjectUtils";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import MediaPreview from "./MediaPreview";
import Lightbox from "./Lightbox";

type PortfolioItem = {
  key: string;
  title: string;
  subtitle?: string;
  liveUrl?: string;
  repoUrl?: string;
  repoIcon?: string;
  description: string;
  buzzwords: string[];
  keywords: string[];
  previewMediaFile: string;
  preview?: any;
};

const ALL_ITEMS: Partial<PortfolioItem>[] = [
  {
    title: "AORIKA - אֵאוֹרִיקָה",
    subtitle: "Showcase of a local woodworking workshop",
    liveUrl: "https://aorika.co.il",
    // repoUrl: "https://github.com/david-a/aorika",
    // repoIcon: "SiGithub",
    previewMediaFile: "https://www.youtube.com/embed/dghs8mvTueQ",
    description: `AORIKA is a local woodworking workshop, offering various wood workshops and products, for small and medium-sized groups. AORIKA's website showcases the range of workshops and services, a gallery of past workshops, and encourages the user to contact the owner.`,
    buzzwords: [
      "Angular 13",
      "Scully.io (Static Angular)",
      "Javascript",
      "TypeScript",
      "SCSS",
      "Google Analytics",
    ],
    keywords: [
      "javascript",
      "typescript",
      "js",
      "ts",
      "frontend",
      "angular",
      "angular 13",
      "scully.io",
      "scss",
      "google analytics",
    ],
  },
  {
    title: "Headstream",
    subtitle: "Smart eCommerce Portfolio Management (EPM)",
    description: `Headstream is an eCommerce Portfolio Management (EPM), which optimizes inventory management and business decisions. We do this by employing stock market trading methods which are based on math, statistics, and advanced computer science algorithms, which allow us to provide real-time inventory insights and enable purchasing automation.`,
    previewMediaFile: "headstream.png",
    buzzwords: [
      "Angular 13",
      "Scully.io (Static Angular)",
      "Javascript",
      "TypeScript",
      "SCSS",
      "Google Analytics",
    ],
    keywords: [
      "javascript",
      "typescript",
      "js",
      "ts",
      "frontend",
      "angular",
      "angular 13",
      "scully.io",
      "scss",
      "google analytics",
    ],
  },
  {
    title: "Cake DIY - עוּגָה בְּהַרְכָּבָה",
    subtitle: "Customize your cake",
    liveUrl: "https://david-a.github.io/kinamon",
    repoUrl: "https://github.com/david-a/kinamon",
    repoIcon: "SiGithub",
    previewMediaFile: "cakesDIYScreenCapture.mov",
    description: `Cake DIY is a weekend project, an MVP, which allow cakes customization and orders from a boutique bakery named Or & Kinamon. It is both desktop and mobile ready and easily supports adding more ingredients.`,
    buzzwords: [
      "Vanilla JS",
      "jQuery",
      "CoffeeScript",
      "Koala",
      "FormSpree.io",
      "SVG manipulation",
      "Google Analytics",
    ],
    keywords: [
      "javascript",
      "typescript",
      "js",
      "ts",
      "frontend",
      "angular",
      "angular 13",
      "scully.io",
      "scss",
      "google analytics",
    ],
  },
];

type Props = {};

const Portfolio = (props: Props) => {
  const query = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/^projects/" } }) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData
          }
          publicURL
        }
      }
    }
  `);
  const previews: Indexable = objArrayToObject(query.allFile.nodes, "base");

  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [art] = useState(chooseRandomElement(PORTFOLIO_ART));

  const [lightbox, setLightbox] = useState<string>();
  const toggleLightbox = (contentId?: string) => () => setLightbox(contentId);

  useEffect(() => {
    setItems(fetchItems());
  }, []);

  const fetchItems = (): PortfolioItem[] => {
    return ALL_ITEMS.map((item) => {
      const preview =
        item.previewMediaFile &&
        (isExternalVideo(item.previewMediaFile)
          ? item.previewMediaFile
          : (previews[item.previewMediaFile!]?.childImageSharp
              ?.gatsbyImageData &&
              getImage(
                previews[item.previewMediaFile!]?.childImageSharp
                  ?.gatsbyImageData
              )) ||
            previews[item.previewMediaFile!]?.publicURL);
      return {
        ...item,
        key: tokenize(item.title!),
        preview,
      } as PortfolioItem;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full bg-gray-light py-2">
        <pre className="text-center font-mono text-2xs md:text-xs 2xl:text-base overflow-x-auto pb-8">
          {art}
        </pre>
      </div>
      {/* div with tailwind css classes to look like a macos window */}
      <div
        className="p-14 grid gap-8 font-sans font-light antialiased w-full justify-center"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(550px, 1fr))",
        }}
      >
        {items.map((item) => {
          const Icon = (SimpleIcons as Indexable)[item.repoIcon!];
          return (
            <div key={item.key} className="macos-window w-1/3">
              <div className="flex flex-row justify-between w-[80%] mt-1 ml-[20%] h-6">
                {item.liveUrl ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    className="w-[70%] rounded bg-white px-2 tooltip"
                    title="Check it out!"
                  >
                    {item.liveUrl}
                  </a>
                ) : (
                  <span></span>
                )}
                {item.repoUrl && item.repoIcon ? (
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    className="tooltip"
                    title="Watch the Source Code"
                  >
                    <Icon className="h-6" />
                  </a>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="mt-4">
                <div className="">
                  <div>
                    <div className="project-header mb-2">
                      <h3 className="text-3xl text-red-light font-display">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <h2 className="text-2xl text-gray font-normal">
                          {item.subtitle}
                        </h2>
                      )}
                    </div>
                    {item.preview && (
                      <>
                        <div onClick={toggleLightbox(item.key)}>
                          <MediaPreview url={item.preview} />
                        </div>
                        {lightbox === item.key && (
                          <Lightbox
                            key={item.key}
                            handleClose={toggleLightbox()}
                          >
                            <MediaPreview url={item.preview} />
                          </Lightbox>
                        )}
                      </>
                    )}
                    -----------------
                    <p className="text-xl">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap py-3">
                  {item.buzzwords.map((word) => {
                    return (
                      <div
                        key={`${item.key}:${tokenize(word)}`}
                        className="bg-yellow hover:bg-yellow-dark rounded px-2 py-1 text-sm mr-2 mb-2"
                      >
                        {word}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
