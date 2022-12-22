import React from "react";
import { getColor } from "../utils/stringUtils";
import ContactRow from "./ContactRow";

type Props = {};

const ContactBox = (props: Props) => {
  return (
    <div className=" items-center py-4">
      <h2 className="text-3xl xl:text-6xl text-center font-display text-red-light flex flex-row">
        Let's Talk @{" "}
        <span className="text-[0.3em] font-mono">
          <ContactRow
            size={"2.5em"}
            toolTipPosition="bottom"
            colorsOnHoverWithDefaultColor={getColor("red-light")}
          />
        </span>
      </h2>
    </div>
  );
};

export default ContactBox;
