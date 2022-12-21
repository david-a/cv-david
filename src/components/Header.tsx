import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import ContactRow from "./ContactRow";

type Props = {
  selected: string;
};

const links = ["home", "stack", "experience", "portfolio", "trivia"];

const Header = ({ selected }: Props) => {
  const verifiedSection = () => (selected === "intro" ? "home" : selected);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [selectedSection, setselectedSection] = React.useState(
    verifiedSection()
  );

  React.useEffect(() => {
    setselectedSection(verifiedSection());
  }, [selected]);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={
        "sticky py-1 top-0 bg-white z-50 " + (isScrolled ? "shadow" : "")
      }
    >
      <div className="flex justify-between my-2 max-w-7xl mx-auto px-16">
        <div className="flex flex-row items-center gap-4">
          <p className="font-light text-base md:text-2xl">David Avikasis</p>
          <ContactRow toolTipPosition="bottom" colorsOnHoverWithDefaultColor />
        </div>
        <nav className="flex flex-row gap-2">
          {links.map((link) => (
            <AnchorLink
              className={
                "font-light text-base md:text-2xl hover:underline hover:font-normal" +
                (selectedSection === link ? " font-normal underline" : "")
              }
              to={"/#" + link}
              onAnchorLinkClick={() => setselectedSection(link)}
              key={link}
            >
              {link}
            </AnchorLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
