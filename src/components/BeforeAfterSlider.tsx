import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    // Constrain position between 0% and 100%
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = (e: ReactMouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const onTouchStart = (e: ReactTouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="glass-line overflow-hidden rounded-[8px] transition hover:border-white/20">
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        className="group relative aspect-[4/5] cursor-ew-resize overflow-hidden select-none"
      >
        {/* Before Image */}
        <img
          src={before}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        />

        {/* After Image Container (revealed based on slider position) */}
        <div
          className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none"
          style={{ width: `${100 - position}%` }}
        >
          <img
            src={after}
            alt={afterAlt}
            className="absolute inset-y-0 right-0 h-full max-w-none object-cover pointer-events-none"
            style={{ width: `${10000 / Math.max(100 - position, 1)}%` }}
          />
        </div>

        {/* Splitter Line and Handle */}
        <div
          className="absolute inset-y-0 w-[2px] bg-gold/90 pointer-events-none"
          style={{ left: `${position}%` }}
        >
          {/* Centered Drag Handle Knob */}
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 bg-ink/90 text-gold shadow-xl shadow-black/80 transition duration-200 group-hover:scale-110 group-hover:border-gold group-hover:text-white">
            <ChevronLeft size={14} className="-mr-0.5" />
            <ChevronRight size={14} className="-ml-0.5" />
          </div>
        </div>

        {/* Quick Helper Label overlay */}
        <div className="absolute bottom-4 left-4 rounded bg-black/60 px-2 py-1 text-[10px] uppercase tracking-wider text-smoke backdrop-blur pointer-events-none">
          Drag on Image
        </div>
      </div>

      <label className="grid gap-3 p-5 text-sm font-semibold text-bone">
        <span className="flex justify-between">
          <span>Edit balance</span>
          <span className="text-xs text-smoke font-normal">{Math.round(position)}%</span>
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={Math.round(position)}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="accent-gold h-1.5 w-full bg-white/10 rounded-lg cursor-pointer"
          aria-label="Adjust before and after comparison slider"
        />
      </label>
    </div>
  );
}

