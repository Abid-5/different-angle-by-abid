import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={heroRef} className="photo-hero" aria-labelledby="home-title">
      <motion.img
        src="images/DSC01969.webp"
        alt="A bridge over the river, framed by a train window and the diagonal lines of the railway."
        className="hero-photograph"
        fetchPriority="high"
        style={reduceMotion ? undefined : { y: imageY }}
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-kicker">Photography by Abid Shahriar</p>
          <h1 id="home-title">
            Different
            <br />
            <em>Angle.</em>
          </h1>
        </motion.div>
        <motion.div
          className="hero-bottom"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div>
            <p className="hero-intro">
              Ordinary moments.
              <br />
              Seen differently.
            </p>
            <Link to="/gallery" className="editorial-link hero-link">
              Explore the photographs{" "}
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
          <button
            type="button"
            className="hero-scroll"
            onClick={() => {
              document
                .getElementById("selected-work")
                ?.scrollIntoView({
                  behavior: reduceMotion ? "instant" : "smooth",
                });
              document
                .getElementById("selected-work")
                ?.focus({ preventScroll: true });
            }}
          >
            Selected work <ArrowDown size={16} aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
