import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0.22, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <p ref={ref} className={className}>
      {text}
    </p>
  );
}
