// Types for Videos

export interface IVideo {
  id: string;
  hash: string;
  title: string;
  description: string;
  location: string;
  category: string;
  thumbnailHash: string;
  isAudio: boolean;
  date: string;
  author: string;
  createdAt: BigInt;
}
