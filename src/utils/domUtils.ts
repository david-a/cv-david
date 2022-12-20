export const setElementColor = (element: HTMLElement, color?: string) => {
  if (element)
    (element as HTMLElement).style.color =
      color || element.getAttribute("data-color") || "#00c1ff";
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
