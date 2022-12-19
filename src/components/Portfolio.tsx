import React from "react";

type PortfolioItem = {
  key: string;
  logo?: any;
  title: string;
  liveUrl: string;
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
// a react functional component that renders a list of projects from a js object
const Portfolio = (props: Props) => {
  return (
    <div>
      {ALL_ITEMS.map((item) => {
        return (
          <div key={item.key}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.buzzwords}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
