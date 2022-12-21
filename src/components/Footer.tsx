import React from "react";
import ContactRow from "./ContactRow";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center w-full h-full bg-black text-white py-4 gap-2">
        <p className="text-sm">
          Made with <span className="text-red-500">❤️</span> by me
        </p>
        <ContactRow toolTipColor="white" />
        <p className="text-sm">App & Beyond © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
