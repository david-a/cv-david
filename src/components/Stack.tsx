import React, { useEffect, useState } from "react";
import * as SimpleIcons from "react-icons/si";
import { tokenize } from "../utils/stringUtils";
import { setElementColor } from "../utils/domUtils";
import { graphql, useStaticQuery } from "gatsby";
import { STACK_ITEMS } from "../constants/mockDB";

type Props = {};

const Stack = (props: Props) => {
  const query = useStaticQuery(graphql`
    query AllStackItems {
      allContentfulStackItem {
        nodes {
          id
          metadata {
            tags {
              id
              name
            }
          }
          iconName
          color
          title
        }
      }
    }
  `);
  const allStackItems: Queries.ContentfulStackItem[] =
    query?.allContentfulStackItem?.nodes || STACK_ITEMS;

  if (!allStackItems.length) return null;
  return (
    <div className="bg-[#00c1ff22] min-h-[400px]">
      <div className="relative -z-20">
        <h2 className="absolute lg:whitespace-nowrap top-20 opacity-20 mx-auto px-16 text-9xl lg:text-[15rem] xl:text-[20rem] font-bold font-display text-blue text-center">
          TECH STACK
        </h2>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex flex-row flex-wrap justify-center gap-10 py-20">
            {allStackItems.map((item) =>
              !item.iconName ? undefined : (
                <div
                  key={item.id || tokenize(item.title!)}
                  aria-label={item.title!}
                  aria-describedby={item.title!}
                  data-tooltip={item.title}
                  data-color={item.color}
                  className={
                    "tooltip tooltip-no-frame col-span-1 items-center transition duration-100 text-black z-10"
                  }
                  onMouseEnter={(event) => {
                    // Forced to use js events instead of tailwind's hover:text-[#color] since it seems not to support dynamic colors
                    setElementColor(event.currentTarget as HTMLElement);
                  }}
                  onMouseLeave={(event) => {
                    setElementColor(
                      event.currentTarget as HTMLElement,
                      "black"
                    );
                  }}
                >
                  {React.createElement((SimpleIcons as any)[item.iconName!], {
                    // className: "h-10",
                    size: "5rem",
                  })}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
