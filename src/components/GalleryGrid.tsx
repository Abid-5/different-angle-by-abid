import type { Photo } from "../data/photos";
import { PhotoCard } from "./PhotoCard";

type GalleryGridProps = {
  photos: Photo[];
  onOpen?: (photo: Photo) => void;
  className?: string;
};

export function GalleryGrid({
  photos,
  onOpen,
  className = "photo-grid",
}: GalleryGridProps) {
  return (
    <div className={className}>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} onOpen={onOpen} />
      ))}
    </div>
  );
}
