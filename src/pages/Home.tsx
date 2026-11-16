import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GalleryGrid } from "../components/GalleryGrid";
import { HeroSection } from "../components/HeroSection";
import { LightboxModal } from "../components/LightboxModal";
import { ScrollReveal } from "../components/ScrollReveal";
import { SmoothPageTransition } from "../components/SmoothPageTransition";
import { photos, type Photo } from "../data/photos";
import { stories } from "../data/stories";
import { useDocumentTitle } from "../utils/useDocumentTitle";

const selectedPhotos = [34, 35, 26, 20, 37, 39].flatMap((id) =>
  photos.filter((photo) => photo.id === id),
);
const featuredStory = stories.find(
  (story) => story.slug === "golden-core-memory",
);

export function Home() {
  useDocumentTitle("Home");
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  return (
    <SmoothPageTransition>
      <HeroSection />
      <section
        id="selected-work"
        tabIndex={-1}
        className="paper-section selected-work"
        aria-labelledby="selected-title"
      >
        <div className="wide-shell">
          <ScrollReveal className="section-heading">
            <div>
              <p className="eyeline">A selection of photographs</p>
              <h2 id="selected-title" className="editorial-title">
                Worth a closer look.
              </h2>
            </div>
            <p className="section-intro">
              People, passing moments, and the small worlds we walk past.
            </p>
          </ScrollReveal>
          <GalleryGrid
            photos={selectedPhotos}
            onOpen={setActivePhoto}
            className="selected-grid"
          />
          <div className="selection-end">
            <p>There is more to see.</p>
            <Link to="/gallery" className="editorial-link">
              View all photographs <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {featuredStory && (
        <section
          className="wide-shell journal-feature"
          aria-labelledby="featured-story-title"
        >
          <ScrollReveal className="journal-image">
            <Link
              to={`/stories/${featuredStory.slug}`}
              aria-label={`Read ${featuredStory.title}`}
            >
              <img
                src={featuredStory.coverImage}
                alt={featuredStory.images[0].alt}
                width={1200}
                height={1600}
                loading="lazy"
              />
            </Link>
          </ScrollReveal>
          <ScrollReveal className="journal-copy" delay={0.1}>
            <p className="eyeline">Behind the photograph</p>
            <h2 id="featured-story-title" className="editorial-title">
              Golden
              <br />
              <em>Core Memory.</em>
            </h2>
            <p className="journal-excerpt">
              A child rides behind his father. Further down the same road, a man
              walks away. One frame made me think about growing up.
            </p>
            <Link
              to={`/stories/${featuredStory.slug}`}
              className="editorial-link"
            >
              Read the story <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </section>
      )}

      <section className="wide-shell photographer-note">
        <p className="eyeline">The person behind the camera</p>
        <div>
          <h2>
            A software engineer.
            <br />
            <em>A habit of noticing.</em>
          </h2>
          <p>
            I’m Abid Shahriar, a photographer from Bangladesh. This is where I
            keep the moments that made me stop and look.
          </p>
          <Link to="/about" className="editorial-link">
            A little about me <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <LightboxModal
        photos={selectedPhotos}
        activePhoto={activePhoto}
        onClose={() => setActivePhoto(null)}
        onNavigate={setActivePhoto}
      />
    </SmoothPageTransition>
  );
}
