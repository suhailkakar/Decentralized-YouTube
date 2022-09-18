import { IPFS_GATEWAY } from "../constants";

/**
 *
 * @param hash - IPFS hash
 * @returns IPFS link
 */
const getIPFSLink = (hash: string): string => {
  const gateway = IPFS_GATEWAY;

  return `${gateway}${hash}`;
};

export default getIPFSLink;
