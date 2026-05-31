import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Story } from "../data/stories";

type StoryCardProps = {
  story: Story;
};

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-[8px] border border-white/10 bg-charcoal">
      <Link to={`/stories/${story.slug}`} className="block">
        <div className="overflow-hidden">
          <img
            src={story.coverImage}
            alt=""
            loading="lazy"
            className="aspect-[16/11] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {story.category} / {story.date}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-bone">
            {story.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-smoke">
            {story.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bone">
            Read Story <ArrowRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
