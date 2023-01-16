import React, { useState } from "react";
import { getRepoPlatform, tokenize } from "../utils/stringUtils";
import * as SimpleIcons from "react-icons/si";
import * as HeroIcons2 from "react-icons/hi2";
import { Indexable } from "../interfaces/Indexable";
import { chooseRandomElement } from "../utils/arrayAndObjectUtils";
import { graphql, useStaticQuery } from "gatsby";
import MediaPreview from "./MediaPreview";
import Lightbox from "./Lightbox";
import { confirmAction, isMobile } from "../utils/domUtils";
import { PORTFOLIO_ART } from "../constants/mockDB";

type Props = {};

const Portfolio = (props: Props) => {
  const query = useStaticQuery(graphql`
    query AllPortfolioItemsAndArt {
      allContentfulPortfolioItem(sort: { order: ASC }) {
        nodes {
          id
          title
          subtitle
          description {
            description
          }
          liveProjectUrl
          repositoryIconName
          repositoryUrl
          previewMediaUrl
          previewMediaFile {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            url
          }
          buzzWords
          metadata {
            tags {
              name
            }
          }
        }
      }
      allContentfulPortfolioArt {
        nodes {
          name
          mobileReady
          pattern {
            pattern
          }
        }
      }
    }
  `);
  const allPortfolioItems: Queries.ContentfulPortfolioItem[] =
    query?.allContentfulPortfolioItem?.nodes;
  const allPortfolioArtPatterns: Queries.ContentfulPortfolioArt[] =
    query?.allContentfulPortfolioArt?.nodes;

  const patterns = isMobile
    ? allPortfolioArtPatterns.filter((pattern) => pattern.mobileReady)
    : allPortfolioArtPatterns;
  const [art] = useState(
    patterns.length
      ? chooseRandomElement(patterns).pattern.pattern
      : PORTFOLIO_ART[0]
  );

  const [lightbox, setLightbox] = useState<string>();
  const toggleLightbox = (contentId?: string) => () => setLightbox(contentId);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden">
      <div className="w-full bg-gray-light py-2 mb-10 md:mb-4">
        <pre className="text-center font-mono text-3xs md:text-xs 2xl:text-base overflow-x-auto pb-4 md:pb-8 pt-4">
          {art}
        </pre>
      </div>
      <div className="macos-window-container  md:p-14 grid gap-8 font-sans font-light antialiased w-[90%] justify-center">
        {allPortfolioItems.map((item) => {
          const Icon =
            (SimpleIcons as Indexable)[item.repositoryIconName!] ||
            (HeroIcons2 as Indexable)[item.repositoryIconName!];
          const preview =
            item.previewMediaFile?.localFile?.childImageSharp
              ?.gatsbyImageData ||
            item.previewMediaFile?.url ||
            item.previewMediaUrl;
          return (
            <div key={item.id} className="macos-window w-1/3">
              <div className="flex flex-row justify-between xl:w-[70%] w-[80%] mt-1 ml-[20%] h-6">
                {item.liveProjectUrl ? (
                  <a
                    href={item.liveProjectUrl}
                    target="_blank"
                    className="w-[80%] rounded bg-white px-2 tooltip overflow-hidden"
                    data-tooltip="Check it out!"
                    aria-label="Live website of this project"
                    aria-describedby="Go to the live site of this project"
                    onClick={confirmAction(
                      "This link will open an external website in a new tab. Are you sure?",
                      "Portfolio:Live:" + item.title
                    )}
                  >
                    {item.liveProjectUrl}
                  </a>
                ) : (
                  <span></span>
                )}
                {item.repositoryUrl && item.repositoryIconName ? (
                  <a
                    href={item.repositoryUrl}
                    target="_blank"
                    className="tooltip"
                    data-tooltip="Watch the Source Code"
                    aria-label="Source Code"
                    aria-describedby="Watch the Source Code"
                    onClick={confirmAction(
                      "This link will open " +
                        getRepoPlatform(item.repositoryUrl) +
                        " in a new tab. Are you sure?",
                      "Portfolio:Source:" + item.title
                    )}
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
                    {preview && (
                      <>
                        <div onClick={toggleLightbox(item.id)}>
                          <MediaPreview url={preview} />
                        </div>
                        {lightbox === item.id && !isMobile && (
                          <Lightbox
                            key={item.id}
                            handleClose={toggleLightbox()}
                          >
                            <MediaPreview url={preview} />
                          </Lightbox>
                        )}
                      </>
                    )}
                    -----------------
                    <p className="text-xl">{item.description?.description}</p>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap py-3">
                  {item.buzzWords?.map((word) => {
                    return (
                      <div
                        key={`${item.id}:${tokenize(word!)}`}
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
