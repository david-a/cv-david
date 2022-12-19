import { StaticImage } from "gatsby-plugin-image";
import React from "react";

type Props = {};

const Intro = (props: Props) => {
  return (
    <>
      <div className="py-4 flex flex-row items-end gap-10">
        <StaticImage
          className="max-w-sm max-w-[40%] md:max-w-[25%]"
          layout="constrained"
          src="../images/deddy-broadway.jpg"
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
      <p className="text-3xl font-light text-justify">
        Over 10 years of experience working in the web development industry,
        handling everything from Infrastructure architecture & DevOps, Backend
        scripts and APIs, to Frontend - UX, Design and Development.
        <br />
        <span className="font-bold font-normal">
          I'm building web apps and systems from scratch to the user screen.
        </span>
      </p>
    </>
  );
};

export default Intro;
