import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Story } from "../data/stories";
import { prefersReducedMotion } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

type StoryLayoutProps = {
  story: Story;
};

export function StoryLayout({ story }: StoryLayoutProps) {
  const rootRef = useRef<HTMLElement>(null);
  const coverClass =
    story.coverFit === "contain"
      ? "mx-auto h-[58vh] min-h-[420px] w-full max-w-5xl object-contain"
      : story.coverFit === "contain-mobile"
        ? "h-auto w-full object-contain sm:h-[58vh] sm:min-h-[420px] sm:object-cover"
        : "h-[58vh] min-h-[420px] w-full object-cover";

  useEffect(() => {
    if (!rootRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".story-reveal", {
        opacity: 0,
        y: 42,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [story.slug]);

  return (
    <article ref={rootRef} className="pt-28">
      <section className="section-shell py-12">
        <p className="eyeline">{story.category} / {story.date}</p>
        <h1 className="mt-6 max-w-[22rem] break-words font-display text-4xl font-semibold leading-tight text-bone sm:max-w-5xl sm:text-6xl lg:text-7xl">
          {story.title}
        </h1>
        <p className="mt-6 max-w-[22rem] break-words text-lg leading-8 text-smoke sm:max-w-2xl sm:text-xl sm:leading-9">
          {story.description}
        </p>
      </section>

      <div className="bg-black">
        <img
          src={story.coverImage}
          alt=""
          className={coverClass}
        />
      </div>

      <section className="section-shell grid gap-12 py-20 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="story-reveal hidden border-l border-gold/30 pl-6 text-sm uppercase tracking-[0.28em] text-gold lg:block">
          Photo Essay
        </aside>
        <div className="space-y-8">
          {story.body.map((paragraph) => (
            <p
              key={paragraph}
              className="story-reveal max-w-[22rem] break-words font-display text-2xl leading-snug text-bone/92 sm:max-w-3xl sm:text-4xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-16 pb-24">
        {story.images.map((image, index) => (
          <figure
            key={`${image.image}-${index}`}
            className={`story-reveal grid gap-5 ${
              index % 2 === 0 ? "lg:mr-24" : "lg:ml-24"
            }`}
          >
            <img
              src={image.image}
              alt={image.alt}
              loading="lazy"
              className="w-full rounded-[8px] border border-white/10 object-cover"
            />
            <figcaption className="max-w-xl text-sm leading-7 text-smoke">
              {String(index + 1).padStart(2, "0")} / {image.caption}
            </figcaption>
          </figure>
        ))}
      </section>
    </article>
  );
}
