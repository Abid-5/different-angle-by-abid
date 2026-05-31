import { useMemo, useState } from "react";
import { FilterTabs } from "../components/FilterTabs";
import { GalleryGrid } from "../components/GalleryGrid";
import { LightboxModal } from "../components/LightboxModal";
import { ScrollReveal } from "../components/ScrollReveal";
import { SmoothPageTransition } from "../components/SmoothPageTransition";
import type { FilterCategory, Photo } from "../data/photos";
import { photos } from "../data/photos";

import { useDocumentTitle } from "../utils/useDocumentTitle";

export function Gallery() {
  useDocumentTitle("Gallery");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "All") return photos;
    return photos.filter((photo) => photo.category === activeFilter);
  }, [activeFilter]);

  return (
    <SmoothPageTransition>
      <section className="section-shell pb-14 pt-32">
        <ScrollReveal className="max-w-3xl">
          <p className="eyeline">Gallery</p>
          <h1 className="section-title mt-5">The archive of ordinary moments.</h1>
          <p className="muted-copy mt-6">
            Browse the frames by mood, category, and small visual accidents.
            Every image here is data-driven so new work can be added from one
            file.
          </p>
        </ScrollReveal>
        <div className="mt-10">
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
        </div>
      </section>

      <section className="section-shell pb-24">
        <GalleryGrid photos={filteredPhotos} onOpen={setActivePhoto} />
      </section>

      <LightboxModal
        photos={filteredPhotos}
        activePhoto={activePhoto}
        onClose={() => setActivePhoto(null)}
        onNavigate={setActivePhoto}
      />
    </SmoothPageTransition>
  );
}
