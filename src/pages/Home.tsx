import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedText } from "../components/AnimatedText";
import { CategoryCard } from "../components/CategoryCard";
import { GalleryGrid } from "../components/GalleryGrid";
import { HeroSection } from "../components/HeroSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { SmoothPageTransition } from "../components/SmoothPageTransition";
import { featuredPhotos, homeCategories } from "../data/photos";

import { useDocumentTitle } from "../utils/useDocumentTitle";

export function Home() {
  useDocumentTitle("Home");
  return (
    <SmoothPageTransition>
      <HeroSection />

      <section className="section-shell py-24">
        <ScrollReveal className="max-w-3xl">
          <p className="eyeline">Featured Categories</p>
          <h2 className="section-title mt-5">
            A visual journal of quiet streets, rain, reflections, and overlooked
            details.
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeCategories.map((category, index) => (
            <ScrollReveal key={category.name} delay={index * 0.03}>
              <CategoryCard {...category} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-[#0c0c0c] py-24">
        <div className="section-shell">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <ScrollReveal className="max-w-2xl">
              <p className="eyeline">Featured Work</p>
              <h2 className="section-title mt-5">Frames with a pulse.</h2>
            </ScrollReveal>
            <Link to="/gallery" className="ghost-button w-fit">
              Open Gallery <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <GalleryGrid photos={featuredPhotos.slice(0, 8)} />
        </div>
      </section>

      <section className="section-shell py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <p className="eyeline">Philosophy</p>
          <AnimatedText
            text="I do not only capture what is in front of me. I try to capture what it feels like."
            className="font-display text-5xl font-semibold leading-tight text-bone sm:text-6xl lg:text-7xl"
          />
        </div>
      </section>

      <section className="section-shell pb-28">
        <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-charcoal px-6 py-16 sm:px-10 lg:px-14">
          <img
            src="images/DSC00729.jpg"
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-36"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
          <div className="relative max-w-3xl">
            <p className="eyeline">Archive</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-bone sm:text-6xl">
              Every frame has a story. Explore the archive.
            </h2>
            <Link to="/gallery" className="gold-button mt-8">
              Open Gallery <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SmoothPageTransition>
  );
}
