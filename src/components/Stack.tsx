import React, { useEffect, useState } from "react";
import * as SimpleIcons from "react-icons/si";
import { tokenize } from "../utils/stringUtils";
import { setElementColor } from "../utils/domUtils";

type StackItem = {
  key: string;
  title: string;
  icon: string;
  color?: string;
  keywords: string[];
};

const ALL_ITEMS: Partial<StackItem>[] = [
  {
    title: "Javascript",
    icon: "SiJavascript",
    color: "#fcdc00",
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
    title: "TypeScript",
    icon: "SiTypescript",
    color: "#007ad3",
    keywords: [
      "javascript",
      "typescript",
      "ts",
      "js",
      "frontend",
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
    title: "HTML",
    icon: "SiHtml5",
    color: "#f84200",
    keywords: [
      "frontend",
      "language",
      "code",
      "coding",
      "html",
      "html5",
      "www",
      "web",
      "markup",
    ],
  },
  {
    title: "CSS",
    icon: "SiCss3",
    color: "#0074be",
    keywords: [
      "frontend",
      "language",
      "code",
      "coding",
      "html",
      "css",
      "css3",
      "www",
      "web",
      "style",
      "styling",
    ],
  },
  {
    title: "Python",
    icon: "SiPython",
    color: "#244d6f",
    keywords: [
      "python",
      "backend",
      "scripts",
      "scripting",
      "programming",
      "language",
      "code",
      "coding",
    ],
  },
  {
    title: "Ruby",
    icon: "SiRuby",
    color: "#df0000",
    keywords: [
      "ruby",
      "backend",
      "scripts",
      "scripting",
      "programming",
      "language",
      "code",
      "coding",
      "rails",
      "rubyonrails",
    ],
  },
  {
    title: "Ruby on Rails",
    icon: "SiRubyonrails",
    color: "#df0000",
    keywords: [
      "ruby",
      "rails",
      "backend",
      "scripts",
      "scripting",
      "rails",
      "rubyonrails",
      "framework",
      "activerecord",
      "api",
      "orm",
      "MVC",
      "Model-View-Controller",
    ],
  },
  {
    title: "React.js",
    icon: "SiReact",
    color: "#61dafb",
    keywords: [
      "react.js",
      "react",
      "JavaScript",
      "frontend",
      "Web",
      "single page application",
      "spa",
      "Virtual DOM",
      "Components",
      "JSX",
      "React Native",
      "Redux",
      "Flux",
      "Webpack",
      "node.js",
      "ES6",
      "Babel",
      "Higher-order components",
      "HOC",
      "framework",
    ],
  },
  {
    title: "Angular",
    icon: "SiAngular",
    color: "#dd0031",
    keywords: [
      "JavaScript",
      "TypeScript",
      "Dependency injection",
      "RxJS",
      "Observables",
      "frontend",
      "Web",
      "single page application",
      "spa",
      "Shadow DOM",
      "Components",
      "Webpack",
      "node.js",
      "ES6",
      "framework",
    ],
  },
  {
    title: "Apollo GraphQL",
    icon: "SiApollographql",
    color: "#3f20ba",
    keywords: [
      "JavaScript",
      "GraphQL",
      "React",
      "React Native",
      "react.js",
      "frontend",
      "backend",
      "api",
      "Web",
    ],
  },
  {
    title: "Redux",
    icon: "SiRedux",
    color: "#764abc",
    keywords: [
      "JavaScript",
      "React",
      "react.js",
      "frontend",
      "api",
      "Web",
      "store",
      "reducer",
      "state management",
      "middleware",
      "thunk",
      "RxJS",
      "Observables",
      "single source of truth",
      "flux",
    ],
  },
  {
    title: "Gatsby",
    icon: "SiGatsby",
    color: "#7026b8",
  },
  {
    title: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "#06b6d4",
  },
  {
    title: "MySQL",
    icon: "SiMysql",
    color: "#00758f",
  },
  {
    title: "PostgreSQL",
    icon: "SiPostgresql",
    color: "#336791",
  },
  {
    title: "MongoDB",
    icon: "SiMongodb",
    color: "#47a248",
  },
  {
    title: "Redis",
    icon: "SiRedis",
    color: "#d82c20",
  },
  {
    title: "GraphQL",
    icon: "SiGraphql",
    color: "#e535ab",
  },
  {
    title: "AWS",
    icon: "SiAmazonaws",
    color: "#ff9600",
  },
  {
    title: "DigitalOcean",
    icon: "SiDigitalocean",
    color: "#0080ff",
  },
  {
    title: "Microsoft Azure",
    icon: "SiMicrosoftazure",
    color: "#0089d6",
  },
];

type Props = {};

const Stack = (props: Props) => {
  const [items, setItems] = useState<StackItem[]>([]);
  useEffect(() => {
    setItems(fetchItems());
  }, []);

  const fetchItems = (): StackItem[] => {
    return ALL_ITEMS.map((item) => {
      return {
        ...item,
        key: tokenize(item.title!),
        keywords: item.keywords || [],
      } as StackItem;
    });
  };

  return (
    <div className="bg-[#00c1ff22]">
      <div className="relative -z-20">
        <h2 className="absolute lg:whitespace-nowrap top-20 opacity-20 mx-auto px-16 text-9xl lg:text-[15rem] xl:text-[20rem] font-bold font-display text-blue text-center">
          TECH STACK
        </h2>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex flex-row flex-wrap justify-center gap-10 py-20">
            {items.map((item) => (
              <div
                key={item.key}
                aria-label={item.title}
                aria-describedby={item.title}
                data-tooltip={item.title}
                data-color={item.color}
                className={
                  "tooltip col-span-1 items-center transition duration-100 text-black z-10"
                }
                onMouseEnter={(event) => {
                  // Forced to use js events instead of tailwind's hover:text-[#color] since it seems not to support dynamic colors
                  setElementColor(event.currentTarget as HTMLElement);
                }}
                onMouseLeave={(event) => {
                  setElementColor(event.currentTarget as HTMLElement, "black");
                }}
              >
                {React.createElement((SimpleIcons as any)[item.icon], {
                  // className: "h-10",
                  size: "5rem",
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
