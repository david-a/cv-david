import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { CONTENTFUL_RICH_TEXT_GATSBY_OPTIONS } from "../constants/contentfulSettings";
import ContactBox from "./ContactBox";

type Props = {};

const Intro = (Props: Props) => {
  const query = useStaticQuery(graphql`
    query DeddyAvatar {
      contentfulAsset(title: { eq: "Deddy - Avatar" }) {
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      contentfulHero(order: { eq: 1 }) {
        heading
        description {
          raw
        }
        contactPhrase
      }
    }
  `);
  const avatar =
    query.contentfulAsset.localFile.childImageSharp.gatsbyImageData;
  const hero = query.contentfulHero;

  return (
    <>
      <div className="py-4 flex flex-row flex-wrap items-end gap-10">
        <GatsbyImage
          className="max-w-sm max-w-full sm:max-w-[25%]"
          image={avatar}
          alt="It's me, David!"
          title="It's me, David!"
        />
        <h1
          className="text-5xl lg:text-7xl xl:text-8xl font-bold font-display"
          dangerouslySetInnerHTML={{ __html: hero.heading }}
        ></h1>
      </div>
      <div className="md:text-3xl font-light text-justify">
        {renderRichText(
          { raw: hero.description.raw } as any,
          CONTENTFUL_RICH_TEXT_GATSBY_OPTIONS as any
        )}
      </div>
      <div className="flex flex-row justify-between">
        <ContactBox contactPhrase={hero.contactPhrase} />
      </div>
    </>
  );
};

export default Intro;
