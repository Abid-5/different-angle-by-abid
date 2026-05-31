import { AnimatePresence, motion } from "framer-motion";
import type { Photo } from "../data/photos";
import { PhotoCard } from "./PhotoCard";

type GalleryGridProps = {
  photos: Photo[];
  onOpen?: (photo: Photo) => void;
};

export function GalleryGrid({ photos, onOpen }: GalleryGridProps) {
  return (
    <motion.div
      layout
      className="masonry-grid columns-1 sm:columns-2 lg:columns-3"
    >
      <AnimatePresence mode="popLayout">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} onOpen={onOpen} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
