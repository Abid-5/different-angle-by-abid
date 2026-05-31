import { Camera, Code2, Compass, Sparkles } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { SmoothPageTransition } from "../components/SmoothPageTransition";

const styleList = [
  "Street photography",
  "Nature photography",
  "Macro photography",
  "Moody edits",
  "Reflections",
  "Human stories",
  "Black and white experiments",
  "Cinematic color grading",
];

const gear = [
  "Camera: Sony a6700",
  "Phone: iPhone 15",
  "Editing: Lightroom / Affinity Photo",
  "Website: React + Framer Motion + GSAP",
];

import { useDocumentTitle } from "../utils/useDocumentTitle";

export function About() {
  useDocumentTitle("About");
  return (
    <SmoothPageTransition>
      <section className="section-shell grid gap-12 pb-16 pt-32 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
        <ScrollReveal>
          <p className="eyeline">About Me</p>
          <h1 className="mt-5 max-w-[20rem] break-words font-display text-4xl font-semibold leading-tight text-bone sm:max-w-none sm:text-5xl lg:text-6xl">
            A software student with a camera and a habit of noticing.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08} className="grid gap-6 md:grid-cols-[0.82fr_1fr] md:items-end">
          <figure className="overflow-hidden rounded-[8px] border border-white/10 bg-charcoal">
            <img
              src="images/DSC01787.jpg"
              alt="Portrait of Abid Shahriar sitting beside a river with a boat and power lines in the background."
              loading="eager"
              className="aspect-[4/5] w-full object-cover object-[50%_42%]"
            />
            <figcaption className="border-t border-white/10 px-4 py-3 text-xs uppercase tracking-[0.22em] text-gold/80">
              Abid Shahriar / Bangladesh
            </figcaption>
          </figure>
          <div>
            <p className="muted-copy">
              I am Abid Shahriar, a software engineering student and visual
              storyteller from Bangladesh. My photography is about noticing the
              small details of everyday life - the quiet streets, reflections,
              post-rain mornings, people, loneliness, nature, and moments that
              most people walk past without seeing.
            </p>
            <p className="muted-copy mt-6">
              Through "Different Angle by Abid", I try to show that ordinary
              scenes can become meaningful when seen with patience, emotion, and
              curiosity.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="section-shell grid gap-6 pb-24 md:grid-cols-3">
        <ScrollReveal className="glass-line rounded-[8px] p-6">
          <Compass className="text-gold" size={28} />
          <h2 className="mt-5 font-display text-3xl font-semibold text-bone">
            My Photography Style
          </h2>
          <p className="mt-4 text-sm leading-7 text-smoke">
            Patient, observant, cinematic, and emotional without forcing the
            scene to become larger than it is.
          </p>
        </ScrollReveal>
        <ScrollReveal className="glass-line rounded-[8px] p-6" delay={0.06}>
          <Sparkles className="text-teal" size={28} />
          <h2 className="mt-5 font-display text-3xl font-semibold text-bone">
            Why "Different Angle"
          </h2>
          <p className="mt-4 text-sm leading-7 text-smoke">
            The subject is not always the obvious thing. Sometimes the story is
            in a reflection, a shadow, a pause, or a small edge of light.
          </p>
        </ScrollReveal>
        <ScrollReveal className="glass-line rounded-[8px] p-6" delay={0.12}>
          <Camera className="text-gold" size={28} />
          <h2 className="mt-5 font-display text-3xl font-semibold text-bone">
            What I Shoot
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-smoke">
            {styleList.slice(0, 6).map((style) => (
              <li key={style}>{style}</li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      <section className="bg-[#0c0c0c] py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <p className="eyeline">Visual Language</p>
            <h2 className="section-title mt-5">Quiet scenes, shaped by shadow and color.</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {styleList.map((style, index) => (
              <ScrollReveal
                key={style}
                delay={index * 0.03}
                className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5 text-sm font-semibold text-bone"
              >
                {style}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <ScrollReveal>
          <Code2 className="text-teal" size={32} />
          <h2 className="mt-5 font-display text-4xl font-semibold text-bone">
            Gear / Tools
          </h2>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {gear.map((item, index) => (
            <ScrollReveal
              key={item}
              delay={index * 0.04}
              className="glass-line rounded-[8px] p-5 text-sm font-semibold text-bone"
            >
              {item}
            </ScrollReveal>
          ))}
        </div>
      </section>
    </SmoothPageTransition>
  );
}
