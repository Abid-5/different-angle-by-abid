import { GalleryGrid } from "../components/GalleryGrid";
import { ScrollReveal } from "../components/ScrollReveal";
import { SmoothPageTransition } from "../components/SmoothPageTransition";
import { photos } from "../data/photos";

const experimentalPhotos = photos.filter((photo) =>
  ["Experimental", "Moody", "Black & White"].includes(photo.category),
);

import { useDocumentTitle } from "../utils/useDocumentTitle";

export function Experiments() {
  useDocumentTitle("Experiments");
  return (
    <SmoothPageTransition>
      <section className="section-shell grid gap-12 pb-16 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <ScrollReveal>
          <p className="eyeline">Experiments / Edits</p>
          <h1 className="section-title mt-5">Before color becomes memory.</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="muted-copy">
            This space is for black and white versions, color grading tests,
            moody edits, and small experiments where the edit becomes part of
            the story.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-shell grid gap-10 pb-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <ScrollReveal className="grid grid-cols-2 items-start gap-4">
          <figure>
            <img
              src="images/DSC01732.webp"
              alt="Warm color edit of a road beneath a cloudy sky and rows of power lines."
              width={1013}
              height={1800}
              className="h-auto w-full"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-smoke">Warm color</figcaption>
          </figure>
          <figure>
            <img
              src="images/DSC01732-2.webp"
              alt="Wider, muted olive-toned edit of the same road with more of the sky and power lines."
              width={1716}
              height={1800}
              className="h-auto w-full"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-smoke">Muted tones</figcaption>
          </figure>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="eyeline">Editing Note</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-bone sm:text-5xl">
            One road. Two moods.
          </h2>
          <p className="muted-copy mt-6">
            Warm color and muted tones give the same road a different atmosphere.
            The two crops shift the balance between the road and the sky; each
            composition is shown in full.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-shell pb-24">
        <ScrollReveal className="mb-10 max-w-2xl">
          <p className="eyeline">Edit Grid</p>
          <h2 className="section-title mt-5">Moody studies and experiments.</h2>
        </ScrollReveal>
        <GalleryGrid photos={experimentalPhotos} />
      </section>
    </SmoothPageTransition>
  );
}
