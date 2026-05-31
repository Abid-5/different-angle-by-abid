import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
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
        <ScrollReveal>
          <BeforeAfterSlider
            before="images/DSC01805-2.webp"
            after="images/DSC01805.webp"
            beforeAlt="Original color portrait of an elderly man in a rural field."
            afterAlt="Cinematic black and white portrait highlighting character and texture."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="eyeline">Editing Note</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-bone sm:text-5xl">
            Character through monochrome contrast.
          </h2>
          <p className="muted-copy mt-6">
            In this comparison, the color version captures the warm heat of the
            field, while the black and white edit reveals the deep textures, lines,
            and emotion of a lifetime.
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
