import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";

type Props = {};

const links = ["home", "stack", "experience", "portfolio", "contact"];

const Header = (props: Props) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
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
  });

  return (
    <header
      className={"sticky top-0 bg-white z-50 " + (isScrolled ? "shadow" : "")}
    >
      <div className="flex justify-between my-2 max-w-7xl mx-auto px-16">
        <p className="font-light text-base md:text-2xl">David Avikasis</p>
        <nav className="flex flex-row gap-2">
          {links.map((link) => (
            <AnchorLink
              className="font-light text-base md:text-2xl hover:underline hover:font-normal"
              to={"/#" + link}
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
