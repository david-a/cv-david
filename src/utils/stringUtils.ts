export const tokenize = (
  str: string,
  stringsToRemove?: string[],
  withHash = false
) => {
  str = str.toLowerCase();
  str = str.replace(/[ ,()-]/g, "");
  stringsToRemove?.forEach((substr) => (str = str.replace(substr, "")));
  if (withHash) {
    str += Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 36).toString(36)
    ).join("");
  }

  return str;
};
