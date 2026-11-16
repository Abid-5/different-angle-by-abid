import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterTabs } from "../components/FilterTabs";
import { GalleryGrid } from "../components/GalleryGrid";
import { LightboxModal } from "../components/LightboxModal";
import { SmoothPageTransition } from "../components/SmoothPageTransition";
import {
  filterCategories,
  photos,
  type FilterCategory,
  type Photo,
} from "../data/photos";
import { useDocumentTitle } from "../utils/useDocumentTitle";

export function Gallery() {
  useDocumentTitle("Gallery");
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const activeFilter =
    filterCategories.find((category) => category === requestedCategory) ??
    "All";
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);
  const filteredPhotos =
    activeFilter === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  function changeFilter(category: FilterCategory) {
    setActivePhoto(null);
    setSearchParams(category === "All" ? {} : { category }, { replace: true });
  }

  return (
    <SmoothPageTransition>
      <div className="paper-section gallery-page">
        <section className="wide-shell gallery-heading">
          <p className="eyeline">The photograph archive</p>
          <div className="gallery-heading-row">
            <h1 className="editorial-title">
              A different way
              <br />
              <em>of looking.</em>
            </h1>
            <p className="section-intro">
              Street scenes, quiet encounters,
              <br />
              and worlds within the details.
            </p>
          </div>
        </section>
        <div className="gallery-toolbar">
          <div className="wide-shell">
            <FilterTabs active={activeFilter} onChange={changeFilter} />
          </div>
        </div>
        <section
          className="wide-shell gallery-collection"
          aria-label="Photographs"
        >
          <p className="photo-count" role="status">
            {filteredPhotos.length}{" "}
            {filteredPhotos.length === 1 ? "photograph" : "photographs"}
            {activeFilter !== "All" ? ` · ${activeFilter}` : ""}
          </p>
          <GalleryGrid photos={filteredPhotos} onOpen={setActivePhoto} />
        </section>
      </div>
      <LightboxModal
        photos={filteredPhotos}
        activePhoto={activePhoto}
        onClose={() => setActivePhoto(null)}
        onNavigate={setActivePhoto}
      />
    </SmoothPageTransition>
  );
}
