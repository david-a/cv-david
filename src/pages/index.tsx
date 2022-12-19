import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Stack from "../components/Stack";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="site-container antialiased">
      <div style={{ height: 10 }}></div>
      <Header></Header>
      <main id="home">
        <section id="intro" className="max-w-7xl mx-auto px-16 my-24">
          <Intro />
        </section>
        <section id="stack" className="mb-24 ">
          <Stack />
        </section>
        <section id="experience" className="mb-24 max-w-7xl mx-auto">
          <Experience />
        </section>
        <section id="portfolio" className="mb-24 max-w-7xl mx-auto">
          <Portfolio />
        </section>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>David Avikasis - CV</title>;
