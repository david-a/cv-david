import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Stack from "../components/Stack";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import { getSectionId } from "../utils/domUtils";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Trivia from "../components/Trivia";
import { DEFAULT_META_DATA } from "../constants/settings";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const [selectedSectionId, setSelectedSectionId] = useState("home");
  const { scrollOffset } = (data as any).site.siteMetadata;
  const changeSelectedSectionByScroll = () => {
    setSelectedSectionId(getSectionId(scrollOffset));
  };

  var debouncedChangeSelectedSectionByScroll = debounce(
    changeSelectedSectionByScroll,
    250,
    { maxWait: 1000 }
  );

  useEffect(() => {
    window.addEventListener("scroll", debouncedChangeSelectedSectionByScroll);
    return () => {
      window.removeEventListener(
        "scroll",
        debouncedChangeSelectedSectionByScroll
      );
    };
  }, []);

  return (
    <div className="site-container antialiased">
      <div className="h-[10px] w-full"></div>
      <Header selected={selectedSectionId}></Header>
      <main id="home">
        <section id="intro" className="py-10 md:py-24">
          <div className="xl:max-w-7xl mx-auto px-16">
            <Intro />
          </div>
        </section>
        <section id="stack" className="pb-24">
          <Stack />
        </section>
        <section id="experience" className="pb-24">
          <div className="xl:max-w-7xl mx-auto">
            <Experience />
          </div>
        </section>
        <section id="portfolio" className="pb-24">
          <Portfolio />
        </section>
        <section id="trivia">
          <Trivia />
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC<PageProps> = ({ data }) => {
  const ogImage = (data as any)?.contentfulAsset?.url;
  return (
    <>
      <title>{DEFAULT_META_DATA.title}</title>
      <meta name="description" content={DEFAULT_META_DATA.description} />
      <meta name="keywords" content={DEFAULT_META_DATA.keywords} />
      <meta name="author" content={DEFAULT_META_DATA.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content={DEFAULT_META_DATA.title} />
      <meta
        property="og:description"
        content={DEFAULT_META_DATA.og_description}
      />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {/* <meta property="og:url" content={DEFAULT_META_DATA.og_url} /> */}
      <meta property="og:type" content="website" />
    </>
  );
};

export const query = graphql`
  query ScrollOffsetQuery {
    site {
      siteMetadata {
        scrollOffset
      }
    }
    contentfulAsset(title: { eq: "Deddy - Avatar" }) {
      title
      url
    }
  }
`;
