import { SUPPORTED_PHOTO_FILETYPES } from "../constants/settings";

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
