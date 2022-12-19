export const setElementColor = (element: HTMLElement, color?: string) => {
  if (element)
    (element as HTMLElement).style.color =
      color || element.getAttribute("data-color") || "#00c1ff";
};
