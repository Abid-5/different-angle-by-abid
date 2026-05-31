import { StoryCard } from "../components/StoryCard";
import { ScrollReveal } from "../components/ScrollReveal";
import { SmoothPageTransition } from "../components/SmoothPageTransition";
import { stories } from "../data/stories";

import { useDocumentTitle } from "../utils/useDocumentTitle";

export function Stories() {
  useDocumentTitle("Stories");
  return (
    <SmoothPageTransition>
      <section className="section-shell pb-16 pt-32">
        <ScrollReveal className="max-w-3xl">
          <p className="eyeline">Stories</p>
          <h1 className="section-title mt-5">Photo essays with room to breathe.</h1>
          <p className="muted-copy mt-6">
            Some images need more than a title. These essays collect connected
            frames, quiet observations, and the feeling behind the scene.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-shell grid gap-6 pb-24 md:grid-cols-2">
        {stories.map((story, index) => (
          <ScrollReveal key={story.slug} delay={index * 0.05}>
            <StoryCard story={story} />
          </ScrollReveal>
        ))}
      </section>
    </SmoothPageTransition>
  );
}
