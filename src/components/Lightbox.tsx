import React, {
  MouseEventHandler,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  handleClose?: Function;
  wrapperId?: string;
};

// react lightbox portal component
const Lightbox = ({
  children,
  handleClose,
  wrapperId = "lightbox-root",
}: Props) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();
  const defaultFunc = () => {};

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose?.();
    }
  };

  if (!wrapperElement) return null;
  return createPortal(
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black/30 z-50"
      onClick={(handleClose || defaultFunc) as MouseEventHandler}
    >
      <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-[70%] w-full">
        {children}
        <button
          className="absolute -top-4 -right-16 rounded-full bg-gray-dark hover:bg-gray-darker py-2 px-4 m-2 font-mono text-white"
          onClick={(handleClose || defaultFunc) as MouseEventHandler}
        >
          X
        </button>
      </div>
    </div>,
    wrapperElement
  );
};

export default Lightbox;

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}
