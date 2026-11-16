import { Plus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Photo } from "../data/photos";

type PhotoCardProps = {
  photo: Photo;
  onOpen?: (photo: Photo) => void;
};

export function PhotoCard({ photo, onOpen }: PhotoCardProps) {
  const reduceMotion = useReducedMotion();
  const photograph = (
    <img
      src={photo.image}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading="lazy"
      decoding="async"
    />
  );

  return (
    <motion.figure
      className="photograph"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
    >
      {onOpen ? (
        <button
          className="photograph-image"
          type="button"
          onClick={() => onOpen(photo)}
          aria-label={`View ${photo.title}`}
        >
          {photograph}
          <span className="photo-open" aria-hidden="true">
            <Plus size={21} />
          </span>
        </button>
      ) : (
        <div className="photograph-image">{photograph}</div>
      )}
      <figcaption>
        <h3>{photo.title}</h3>
        <span>{photo.category}</span>
      </figcaption>
    </motion.figure>
  );
}
