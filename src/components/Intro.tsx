import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
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
    }
  `);
  const avatar =
    query.contentfulAsset.localFile.childImageSharp.gatsbyImageData;

  return (
    <>
      <div className="py-4 flex flex-row flex-wrap items-end gap-10">
        <GatsbyImage
          className="max-w-sm max-w-full sm:max-w-[25%]"
          image={avatar}
          alt="It's me, David!"
          title="It's me, David!"
        />
        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold font-display">
          Hi! I'm <span className="text-blue">David</span>
          , an
          <br />
          <span className="text-yellow">Ultra-FullStack</span>
          <br />
          Developer.
        </h1>
      </div>
      <p className="md:text-3xl font-light text-justify">
        Over 10 years of experience working in the web development industry,
        handling everything from Infrastructure architecture & DevOps, Backend
        scripts and APIs, to Frontend - UX, Design and Development.
        <span className="font-bold font-normal">
          {" "}
          I'm building web apps and systems from scratch to the user screen.
        </span>
      </p>
      <div className="flex flex-row justify-between">
        <ContactBox />
      </div>
    </>
  );
};

export default Intro;
