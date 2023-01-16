import React from "react";
import { isMobile } from "../utils/domUtils";
import { getColor } from "../utils/stringUtils";
import ContactRow from "./ContactRow";

type Props = {
  contactPhrase?: string;
};

const ContactBox = ({ contactPhrase = "Let's Talk @" }: Props) => {
  return (
    <div className="items-center py-4 mx-auto">
      <h2 className="text-3xl xl:text-6xl text-center font-display text-red-light flex flex-col md:flex-row">
        {contactPhrase}{" "}
        <span className="text-[0.3em] font-mono">
          <ContactRow
            size={isMobile ? "4em" : "2.7em"}
            toolTipPosition="bottom"
            colorsOnHoverWithDefaultColor={getColor("red-light")}
          />
        </span>
      </h2>
    </div>
  );
};

export default ContactBox;
