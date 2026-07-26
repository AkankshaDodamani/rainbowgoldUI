export const getDirectImageUrl = (url) => {
  if (!url) return "";
  if (url.includes("drive.google.com/file/d/")) {
    const match = url.match(/\/d\/(.*?)\//);

    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }
  return url;
};
