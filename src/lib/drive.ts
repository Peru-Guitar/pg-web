/** Turns a Google Drive share link into a direct download link. */
export const toDirectDownloadUrl = (url: string) => {
  const match = url.match(/drive\.google\.com\/file\/d\/([^/?]+)/);
  return match
    ? `https://docs.google.com/uc?export=download&id=${match[1]}`
    : url;
};
