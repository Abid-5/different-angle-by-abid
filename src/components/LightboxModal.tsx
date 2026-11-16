import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = activePhoto !== null;
  const activeIndex = photos.findIndex((photo) => photo.id === activePhoto?.id);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function navigate(direction: number) {
    if (activeIndex < 0 || photos.length < 2) return;
    onNavigate(
      photos[(activeIndex + direction + photos.length) % photos.length],
    );
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      navigate(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="photo-viewer"
      aria-label="Photograph viewer"
      onCancel={onClose}
      onKeyDown={handleKeyDown}
    >
      {activePhoto && (
        <div className="viewer-layout">
          <header className="viewer-toolbar">
            <span className="viewer-count" aria-live="polite">
              {activeIndex + 1} / {photos.length}
            </span>
            <div className="viewer-actions">
              <button
                type="button"
                onClick={() => navigate(-1)}
                disabled={photos.length < 2}
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() => navigate(1)}
                disabled={photos.length < 2}
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close lightbox"
              >
                <X size={23} />
              </button>
            </div>
          </header>
          <div className="viewer-stage">
            <img
              src={activePhoto.image}
              alt={activePhoto.alt}
              width={activePhoto.width}
              height={activePhoto.height}
            />
          </div>
          <div className="viewer-info" aria-live="polite">
            <div>
              <p className="eyeline">
                {activePhoto.category} · {activePhoto.location} ·{" "}
                {activePhoto.date}
              </p>
              <h2>{activePhoto.title}</h2>
              <p className="viewer-caption">{activePhoto.caption}</p>
            </div>
            {activePhoto.exif && (
              <details key={activePhoto.id} className="camera-details">
                <summary>Camera details</summary>
                <p>
                  {activePhoto.exif.camera} · {activePhoto.exif.lens}
                </p>
                <p>
                  {activePhoto.exif.aperture} · {activePhoto.exif.shutterSpeed}{" "}
                  · {activePhoto.exif.iso}
                </p>
              </details>
            )}
          </div>
        </div>
      )}
    </dialog>,
    document.body,
  );
}
