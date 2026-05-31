import { ArrowRight, Images } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!imageRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.12,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, imageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        ref={imageRef}
        src="images/DSC02065.jpg"
        alt="Cinematic golden moon rising in deep twilight over city rooftops and tree silhouettes."
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_78%,rgba(214,168,79,0.24),transparent_32%),radial-gradient(circle_at_86%_22%,rgba(110,231,183,0.14),transparent_30%)]" />

      <div className="section-shell relative z-10 pb-16 pt-32 sm:pb-20 lg:pb-24">
        <div className="max-w-5xl">
          <motion.p
            className="mb-5 text-sm font-semibold uppercase tracking-[0.34em] text-gold"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            by Abid
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(4rem,12vw,11rem)] font-semibold leading-[0.86] text-bone"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Different Angle
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-2xl leading-9 text-white/78 sm:text-3xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Ordinary moments. Seen differently.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.82 }}
          >
            <Link to="/gallery" className="gold-button">
              <Images size={17} aria-hidden="true" /> View Gallery
            </Link>
            <Link to="/stories" className="ghost-button">
              Explore Stories <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-white/0 via-white/28 to-white/0" />
      </div>
    </section>
  );
}
