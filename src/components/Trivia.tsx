// A component which takes up a list of sentences in the form of {text, links?:[{text, link}]} and renders them as a list of sentences with links, in a trivia-card like designed container
import React from "react";
import { confirmAction } from "../utils/domUtils";
import { getColor, getDomainFromUrl, tokenize } from "../utils/stringUtils";

type TriviaItem = {
  key: string;
  text: string;
  links: { text: string; link: string; color?: string }[];
  keywords: string[];
};

const ALL_ITEMS: Partial<TriviaItem>[] = [
  {
    text: "I usually work remotely from home as well all around the world 🌎",
    links: [
      {
        text: "#aroundtheworld",
        link: "https://www.youtube.com/watch?v=yMWXcvsZ-9Q&list=PLA7qcUDpQABd3XOS8WTC7biIefGKXsnfW",
      },
    ],
    keywords: [
      "developer",
      "full-stack",
      "full stack",
      "web",
      "mobile",
      "app",
      "application",
      "build",
      "building",
    ],
  },
  {
    text: "I’m a musician and producer of various musical genres.",
    links: [
      {
        text: "#Electronic🎹",
        link: "https://www.youtube.com/watch?v=UAecSqk5IwM&list=OLAK5uy_nqYzHB0gzEOwX-XXUP60dGwteJNnWIljo",
      },
      {
        text: "#RockBallads🎸",
        link: "https://www.youtube.com/watch?v=0ZU_fwR-hzs&list=PLPhrtjVxG--ME_w7QGrum-Rp5QuLm5TIu",
        color: getColor("purple"), // "#d371e3",
      },
      {
        text: "#JewishElectroAndalusian🎻🪘",
        link: "https://www.youtube.com/watch?v=AzUG2cjHR9g&list=PL0rQVWZ2Gy7ckkr9Xo71C2-2ExWRh6diX",
        color: getColor("red-light"), // "#f7a8a8",
      },
      {
        text: "#Spotify",
        link: "https://open.spotify.com/artist/4ZQZ2Z1Z7Z7Z7Z7Z7Z7Z7Z",
        color: "#1db954",
      },
    ],
    keywords: ["musician", "producer", "music producer"],
  },
  {
    text: "I usua3lly work remotely from home as well all around the world 🌎",
    links: [
      {
        text: "#aroundtheworld",
        link: "https://www.youtube.com/watch?v=yMWXcvsZ-9Q&list=PLA7qcUDpQABd3XOS8WTC7biIefGKXsnfW",
      },
    ],
    keywords: [
      "developer",
      "full-stack",
      "full stack",
      "web",
      "mobile",
      "app",
      "application",
      "build",
      "building",
    ],
  },
  {
    text: "I usual1ly work remotely from home as well all around the world 🌎",
    links: [
      {
        text: "#aroundtheworld",
        link: "https://www.youtube.com/watch?v=yMWXcvsZ-9Q&list=PLA7qcUDpQABd3XOS8WTC7biIefGKXsnfW",
      },
    ],
    keywords: [
      "developer",
      "full-stack",
      "full stack",
      "web",
      "mobile",
      "app",
      "application",
      "build",
      "building",
    ],
  },
  {
    text: "noin2al5ly work remotely from home as well all around the world 🌎",
    links: [
      {
        text: "#aroundtheworld",
        link: "https://www.youtube.com/watch?v=yMWXcvsZ-9Q&list=PLA7qcUDpQABd3XOS8WTC7biIefGKXsnfW",
      },
    ],
    keywords: [
      "developer",
      "full-stack",
      "full stack",
      "web",
      "mobile",
      "app",
      "application",
      "build",
      "building",
    ],
  },
  {
    text: "ag3g3ua6lly work remotely from home as well all around the world 🌎",
    links: [
      {
        text: "#aroundtheworld",
        link: "https://www.youtube.com/watch?v=yMWXcvsZ-9Q&list=PLA7qcUDpQABd3XOS8WTC7biIefGKXsnfW",
      },
    ],
    keywords: [
      "developer",
      "full-stack",
      "full stack",
      "web",
      "mobile",
      "app",
      "application",
      "build",
      "building",
    ],
  },
  {
    text: "egsgawua7lly work remotely from home as well all around the world 🌎",
    links: [
      {
        text: "#aroundtheworld",
        link: "https://www.youtube.com/watch?v=yMWXcvsZ-9Q&list=PLA7qcUDpQABd3XOS8WTC7biIefGKXsnfW",
      },
    ],
    keywords: [
      "developer",
      "full-stack",
      "full stack",
      "web",
      "mobile",
      "app",
      "application",
      "build",
      "building",
    ],
  },
  {
    text: "awa aI usu8ally work remotely from home as well all around the world 🌎",
    links: [
      {
        text: "#aroundtheworld",
        link: "https://www.youtube.com/watch?v=yMWXcvsZ-9Q&list=PLA7qcUDpQABd3XOS8WTC7biIefGKXsnfW",
      },
    ],
    keywords: [
      "developer",
      "full-stack",
      "full stack",
      "web",
      "mobile",
      "app",
      "application",
      "build",
      "building",
    ],
  },
  {
    text: "I aa work remotely from home as well all around the world 🌎",
    links: [
      {
        text: "#aroundtheworld",
        link: "https://www.youtube.com/watch?v=yMWXcvsZ-9Q&list=PLA7qcUDpQABd3XOS8WTC7biIefGKXsnfW",
      },
    ],
    keywords: [
      "developer",
      "full-stack",
      "full stack",
      "web",
      "mobile",
      "app",
      "application",
      "build",
      "building",
    ],
  },
  {
    text: "I 2daas work remotely from home as well all around the world 🌎",
    links: [
      {
        text: "#aroundtheworld",
        link: "https://www.youtube.com/watch?v=yMWXcvsZ-9Q&list=PLA7qcUDpQABd3XOS8WTC7biIefGKXsnfW",
      },
    ],
    keywords: [
      "developer",
      "full-stack",
      "full stack",
      "web",
      "mobile",
      "app",
      "application",
      "build",
      "building",
    ],
  },
];

type Props = {
  // selected: string;
};

const Trivia = () => {
  const [triviaItems, setTriviaItems] = React.useState<TriviaItem[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<TriviaItem | null>(
    null
  );

  React.useEffect(() => {
    const filteredItems = ALL_ITEMS.map(
      (item) =>
        ({
          ...item,
          key: tokenize(item.text!, { firstChars: 10 }),
          links: item.links || [],
          keywords: item.keywords || [],
        } as TriviaItem)
    );

    // .filter((item) =>
    //   item.keywords.includes(selected)
    // );
    setTriviaItems(filteredItems);
    setSelectedItem(filteredItems[0]);
  }, []);

  const handleItemClick = (item: TriviaItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="paper">
      <h1 className="px-20 text-xl sm:text-3xl font-mono"># Trivia Facts</h1>
      <div className="paper-pattern">
        <ol className="paper-content flex flex-col items-start justify-start list-decimal">
          <br />
          {triviaItems.map((item, index) => {
            return (
              <li key={item.key} className="font-display">
                <h3>
                  {item.text}
                  {item.links.map((link) => {
                    const key = item.key + tokenize(link.text);
                    const alt = "Link to " + link.text;
                    return (
                      <a
                        className="opacity-70 hover:opacity-100 transition-opacity duration-200 text-[0.9em] mx-2 tooltip"
                        href={link.link}
                        target="_blank"
                        data-tooltip={"Open on " + getDomainFromUrl(link.link)}
                        aria-label={alt}
                        aria-describedby={alt}
                        onClick={confirmAction(
                          "This link will open an external website in a new tab. Are you sure?"
                        )}
                        style={{
                          color:
                            link.color ||
                            getColor({ contrast: "dark", seed: key }),
                        }}
                        key={key}
                      >
                        {link.text}
                      </a>
                    );
                  })}
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
