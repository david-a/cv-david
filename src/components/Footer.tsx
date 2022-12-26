import React from "react";
import ContactRow from "./ContactRow";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center w-full h-full bg-black text-white py-4 gap-2">
        <p className="text-sm">
          Designed & developed with <span className="text-red-500">❤️</span> by
          David Avikasis
        </p>
        <ContactRow toolTipColor="white" />
        <p className="text-sm">App & Beyond © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
