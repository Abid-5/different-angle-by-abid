import { motion } from "framer-motion";
import type { Photo } from "../data/photos";

type PhotoCardProps = {
  photo: Photo;
  onOpen?: (photo: Photo) => void;
};

export function PhotoCard({ photo, onOpen }: PhotoCardProps) {
  const Wrapper = onOpen ? "button" : "article";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="masonry-item"
    >
      <Wrapper
        type={onOpen ? "button" : undefined}
        onClick={onOpen ? () => onOpen(photo) : undefined}
        className="group relative block w-full overflow-hidden rounded-[8px] border border-white/10 bg-charcoal text-left"
      >
        <img
          src={photo.image}
          alt={photo.alt}
          loading="lazy"
          className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/22 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {photo.category}
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-bone">
            {photo.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/75">{photo.caption}</p>
          <p className="mt-3 text-xs text-white/55">
            {photo.location} / {photo.date}
          </p>
        </div>
      </Wrapper>
    </motion.div>
  );
}
