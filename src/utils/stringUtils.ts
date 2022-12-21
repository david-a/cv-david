import COLORS from "../constants/colors";
import { SUPPORTED_PHOTO_FILETYPES } from "../constants/settings";

export const tokenize = (
  strRaw: string,
  {
    stringsToRemove,
    withHash,
    firstChars,
  }: {
    stringsToRemove?: string[];
    withHash?: boolean;
    firstChars?: number;
  } = {}
) => {
  let str = strRaw.toLowerCase();
  if (firstChars) {
    str = str.slice(0, firstChars);
  }
  str = str.replace(/[\#\`\'\"\’\ \,\(\)\-]/g, "");
  stringsToRemove?.forEach((substr) => (str = str.replace(substr, "")));
  if (withHash) {
    str += Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 36).toString(36)
    ).join("");
  }

  return str;
};

// a function which sanitizes a string to be used in dangerouslySetInnerHTML
export const sanitizeString = (str: string) => {
  return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
};

export const getUrlExtension = (url: string) => {
  return url.split(/[#?]/)[0].split(".").pop()?.trim().toLowerCase();
};

export const isPhoto = (url?: string) => {
  if (!url) return true;
  const ext = getUrlExtension(url);
  return !ext || SUPPORTED_PHOTO_FILETYPES.includes(ext);
};

export const isExternalVideo = (url?: string) => {
  return url?.includes("youtube.com");
};

export const getYoutubeVideoId = (url: string) => url.match(/\/embed\/(.*)\/?/);

export const getExternalVideoThumb = (url: string) => {
  const videoId = getYoutubeVideoId(url);
  return (
    videoId &&
    videoId[1] &&
    `https://img.youtube.com/vi/${videoId[1]}/mqdefault.jpg`
  );
};

export const getYoutubeSrc = (urlRaw: string) => {
  const videoId = getYoutubeVideoId(urlRaw);
  return (
    urlRaw + "?enablejsapi=1&loop=1&playlist=" + ((videoId && videoId[1]) || "")
  );
};

export const getRepoPlatform = (url: string) => {
  // get the platform from the url
  const platform = url.split("/")[2];
  if (platform.includes("github")) return "GitHub";
  if (platform.includes("gitlab")) return "GitLab";
  if (platform.includes("bitbucket")) return "BitBucket";
  return platform;
};

export const getColor = (
  data:
    | string
    | {
        contrast?: "dark" | "light";
        seed?: string;
      } = {}
): string => {
  let name, contrast: any, seed;
  if (typeof data === "string") {
    name = data;
  } else {
    ({ contrast, seed } = data);
  }
  if (!name) {
    let colors = Object.keys(COLORS);
    if (contrast) {
      colors = colors.filter(
        (color) => getTextColor(COLORS[color]) === contrast
      );
    }
    console.log("seed", seed);
    return seed
      ? COLORS[encodeStringToNumberInRange(seed, colors.length - 1)]
      : COLORS[colors[Math.floor(Math.random() * colors.length)]];
  }

  return COLORS[name] || "black";
};

export const getRgbFromHex = (hex: string) => {
  const rgb =
    hex.length === 4
      ? hex.replace(
          /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/g,
          "#$1$1$2$2$3$3"
        )
      : hex;
  const r = parseInt(rgb.substring(1, 2), 16);
  const g = parseInt(rgb.substring(3, 2), 16);
  const b = parseInt(rgb.substring(5, 2), 16);
  return [r, g, b];
};

// a function which get a hex color and returns if it's a dark or light
export const getTextColor = (hex: string) => {
  // convert hex to rgb
  const [r, g, b] = getRgbFromHex(hex);
  // get YIQ ratio
  const yiq = r * 0.2126 + g * 0.7152 + b * 0.0722;
  // check contrast
  return yiq < 255 / 2 ? "dark" : "light";
};

export const encodeStringToNumberInRange = (
  str: string,
  max: number = 10,
  min: number = 0
) => {
  // initialize the result to 0
  let result = 0;

  // iterate through the characters in the string
  for (let i = 0; i < str.length; i++) {
    // get the ASCII code for the current character
    let code = str.charCodeAt(i);

    // scale the ASCII code to the required range using the Math.pow() and Math.round() functions
    let scaledCode = Math.round(Math.pow(code, 2) / max);

    // add the scaled code to the result
    result += scaledCode;
  }

  // use the Math.min() and Math.max() functions to ensure that the result is within the required range
  return Math.min(Math.max(result, min), max);
};
