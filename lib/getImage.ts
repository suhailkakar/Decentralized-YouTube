import getIPFSLink from "./getIPFSLink";
import imagekitURL from "./getImageKit";

/**
 *
 * @param profile - Profile object
 * @returns avatar image url
 */

const getImage = (image: any): string => {
  return imagekitURL(getIPFSLink(image), "thumbnail");
};

export default getImage;
