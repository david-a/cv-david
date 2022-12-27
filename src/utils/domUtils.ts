import { getColor } from "./stringUtils";

export const setElementColor = (element: HTMLElement, color?: string) => {
  if (element)
    (element as HTMLElement).style.color =
      color || element.getAttribute("data-color") || getColor("blue");
};

export const enableVideoControls = (element: HTMLElement, enable = true) => {
  if (element) (element as any).controls = enable;
};

export const getSectionId = (
  offset: number = 0,
  defaultSctionId: string = "home"
) => {
  var scrollPos = document.documentElement.scrollTop;
  let sectionId = defaultSctionId;
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;

    if (
      sectionTop <= scrollPos + offset + 1 &&
      sectionTop + section.clientHeight > scrollPos + offset + 1
    ) {
      sectionId = section.id;
    }
  });
  return sectionId;
};

export const confirmAction = (msg: string) => (event: any) => {
  const answer = confirm(msg);
  if (!answer) {
    event.preventDefault();
    return false;
  }
  return true;
};

export const isMobile =
  (typeof navigator === "object" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ||
  (typeof document === "object" &&
    "ontouchstart" in document.documentElement &&
    navigator.userAgent.match(/Mobi/)) ||
  (typeof window === "object" &&
    window.matchMedia("only screen and (max-width: 768px)").matches);
