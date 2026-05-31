import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Photo } from "../data/photos";

type LightboxModalProps = {
  photos: Photo[];
  activePhoto: Photo | null;
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
};

export function LightboxModal({
  photos,
  activePhoto,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const activeIndex = activePhoto
    ? photos.findIndex((photo) => photo.id === activePhoto.id)
    : -1;

  const showPrevious = () => {
    if (activeIndex < 0) return;
    const nextIndex = (activeIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[nextIndex]);
  };

  const showNext = () => {
    if (activeIndex < 0) return;
    const nextIndex = (activeIndex + 1) % photos.length;
    onNavigate(photos[nextIndex]);
  };

  useEffect(() => {
    if (!activePhoto) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeRef.current?.focus(), 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePhoto, activeIndex]);

  return (
    <AnimatePresence>
      {activePhoto && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/88 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePhoto.title} photo details`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={onClose}
            aria-label="Close lightbox backdrop"
          />
          <motion.div
            className="relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[8px] border border-white/12 bg-[#0b0b0b] shadow-2xl shadow-black/60 lg:grid-cols-[minmax(0,1.25fr)_380px]"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative min-h-[320px] bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="h-full max-h-[92vh] w-full object-contain"
              />
              <button
                type="button"
                className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-bone backdrop-blur transition hover:bg-white/15"
                onClick={showPrevious}
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-bone backdrop-blur transition hover:bg-white/15"
                onClick={showNext}
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <aside className="flex flex-col justify-between gap-8 p-6 lg:p-8 overflow-y-auto max-h-[50vh] lg:max-h-[92vh]">
              <button
                ref={closeRef}
                type="button"
                className="ml-auto flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-smoke transition hover:border-white/35 hover:text-bone"
                onClick={onClose}
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                    {activePhoto.category}
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-bone">
                    {activePhoto.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-smoke">
                    {activePhoto.caption}
                  </p>
                </div>
                <dl className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
                  <div>
                    <dt className="text-white/45 text-xs uppercase tracking-wider">Location</dt>
                    <dd className="mt-1 text-bone font-medium">{activePhoto.location}</dd>
                  </div>
                  <div>
                    <dt className="text-white/45 text-xs uppercase tracking-wider">Date</dt>
                    <dd className="mt-1 text-bone font-medium">{activePhoto.date}</dd>
                  </div>
                </dl>

                {activePhoto.exif && (
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold/80 mb-4">
                      Technical Specs (EXIF)
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-xs">
                      <div className="col-span-2">
                        <span className="text-white/40 block text-[10px] uppercase tracking-wider">Camera & Lens</span>
                        <span className="text-bone font-medium mt-1 block">
                          {activePhoto.exif.camera} • {activePhoto.exif.lens}
                        </span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px] uppercase tracking-wider">Aperture</span>
                        <span className="text-bone font-medium mt-1 block">{activePhoto.exif.aperture}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px] uppercase tracking-wider">Shutter Speed</span>
                        <span className="text-bone font-medium mt-1 block">{activePhoto.exif.shutterSpeed}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-white/40 block text-[10px] uppercase tracking-wider">ISO Rating</span>
                        <span className="text-bone font-medium mt-1 block">{activePhoto.exif.iso}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
