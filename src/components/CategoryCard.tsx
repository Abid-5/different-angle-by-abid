import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type CategoryCardProps = {
  name: string;
  description: string;
  image: string;
};

export function CategoryCard({ name, description, image }: CategoryCardProps) {
  return (
    <motion.article
      className="group relative min-h-[320px] overflow-hidden rounded-[8px] border border-white/10 bg-charcoal"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="mb-4 flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-bone">
          <ArrowUpRight size={18} aria-hidden="true" />
        </div>
        <h3 className="font-display text-3xl font-semibold text-bone">{name}</h3>
        <p className="mt-3 translate-y-2 text-sm leading-6 text-white/72 opacity-90 transition duration-300 group-hover:translate-y-0 group-hover:text-white">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
