import { VideoUploaded as VideoUploadedEvent } from "../generated/Ourtube/Ourtube";
import { Video } from "../generated/schema";

export function handleVideoUploaded(event: VideoUploadedEvent): void {
  let video = new Video(event.params.id.toString());
  video.hash = event.params.hash;
  video.title = event.params.title;
  video.description = event.params.description;
  video.location = event.params.location;
  video.category = event.params.category;
  video.thumbnailHash = event.params.thumbnailHash;
  video.isAudio = event.params.isAudio;
  video.date = event.params.date;
  video.author = event.params.author;
  video.createdAt = event.block.timestamp;
  video.save();
}
