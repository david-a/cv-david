import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { MouseEventHandler, useRef } from "react";
import { sendEventToGoogleAnalytics } from "../utils/domUtils";
import ContactRow from "./ContactRow";

const links = ["home", "stack", "experience", "portfolio", "trivia"];

type Props = {
  selected: string;
};

const Header = ({ selected }: Props) => {
  const verifiedSection = () => (selected === "intro" ? "home" : selected);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedSection, setselectedSection] = React.useState(
    verifiedSection()
  );

  React.useEffect(() => {
    setselectedSection(verifiedSection());
  }, [selected]);

  const toggleMenu = (event?: any) => {
    event?.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const onAnchorLinkClick =
    (section: string, shouldToggleMenu = true) =>
    () => {
      // sendEventToGoogleAnalytics("anchor", "click", section);
      shouldToggleMenu && isMenuOpen && toggleMenu();
      setselectedSection(section);
    };

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
        "sticky py-1 top-0 left-0 right-0 bg-white z-40 " +
        (isScrolled ? "shadow" : "")
      }
    >
      <div
        className={
          "flex justify-between text-center my-2 xl:max-w-7xl mx-auto px-4 md:px-16" +
          (isMenuOpen ? " flex-col" : "")
        }
      >
        <div
          className={
            "flex-row items-center gap-4" + (isMenuOpen ? " hidden" : " flex")
          }
        >
          <AnchorLink
            className="font-light text-xl md:text-2xl"
            to={"/#home"}
            onAnchorLinkClick={onAnchorLinkClick("home", false)}
          >
            David Avikasis
          </AnchorLink>
          <ContactRow toolTipPosition="bottom" colorsOnHoverWithDefaultColor />
        </div>
        <div>
          <nav
            className={
              "md:flex md:flex-row flex-col gap-2" +
              (isMenuOpen
                ? " flex w-full h-screen absolute top-0 left-0 right-0 bg-white p-10"
                : " hidden")
            }
          >
            <a
              className="md:hidden top-4 right-6 text-right text-4xl"
              onClick={toggleMenu}
            >
              &times;
            </a>

            {links.map((link) => (
              <AnchorLink
                className={
                  "font-light text-4xl md:text-2xl hover:underline hover:font-normal" +
                  (selectedSection === link ? " font-normal underline" : "")
                }
                to={"/#" + link}
                onAnchorLinkClick={onAnchorLinkClick(link)}
                key={link}
              >
                {link}
              </AnchorLink>
            ))}
          </nav>
          <div
            className={
              "flex items-center md:hidden" + (isMenuOpen ? " hidden" : "")
            }
          >
            <button
              className=" text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
