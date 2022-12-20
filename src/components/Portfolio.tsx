import React, { useEffect, useState } from "react";
import { tokenize } from "../utils/stringUtils";
import * as SimpleIcons from "react-icons/si";
import { Indexable } from "../interfaces/Indexable";
import { PORTFOLIO_ART } from "../constants/portfolioArt";
import { chooseRandomElement } from "../utils/arrayAndObjectUtils";

type PortfolioItem = {
  key: string;
  logo?: any;
  title: string;
  liveUrl?: string;
  repoUrl?: string;
  repoIcon?: string;
  description: string;
  buzzwords: string[];
  keywords: string[];
  previewImageFile: string;
  previewVideoFile: string;
};

const ALL_ITEMS: Partial<PortfolioItem>[] = [
  {
    title: "AORIKA Website",
    liveUrl: "https://aorika.co.il",
    // repoUrl: "https://github.com/david-a/aorika",
    // repoIcon: "SiGithub",
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
    title: "Cake DIY by Or & Kinamon",
    liveUrl: "https://david-a.github.io/kinamon",
    repoUrl: "https://github.com/david-a/kinamon",
    repoIcon: "SiGithub",
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
  {
    title: "AORIKA Website 3",
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
];

type Props = {};

const Portfolio = (props: Props) => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [art, setArt] = useState(chooseRandomElement(PORTFOLIO_ART));
  useEffect(() => {
    setItems(fetchItems());
  }, []);

  const fetchItems = (): PortfolioItem[] => {
    return ALL_ITEMS.map((item) => {
      return {
        ...item,
        key: tokenize(item.title!),
      } as PortfolioItem;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full bg-gray-light py-2">
        <pre className="text-center font-mono pb-8">{art}</pre>
      </div>
      {/* div with tailwind css classes to look like a macos window */}
      <div className="p-14 grid grid-cols-3 gap-4 font-sans font-light antialiased">
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
                    <h3 className="text-3xl font-semibold">{item.title}</h3>
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
