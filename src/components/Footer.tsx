import { Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060606]">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <Link to="/" className="inline-flex items-center gap-3 font-display text-3xl font-semibold text-bone">
            <img
              src="brand/as-monogram.png"
              alt=""
              width={80}
              height={80}
              className="size-16 shrink-0 brightness-0 invert"
            />
            <span>Different Angle <span className="block text-lg text-smoke">by Abid</span></span>
          </Link>
          <p className="mt-5 max-w-xl text-lg leading-8 text-smoke">
            I do not only capture what is in front of me. I try to capture what
            it feels like.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex gap-3">
            <a
              href="mailto:abidshahriar1294@gmail.com"
              className="flex size-11 items-center justify-center rounded-full border border-white/15 text-smoke transition hover:border-gold/60 hover:text-gold"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/14d6NZifkbB/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-11 items-center justify-center rounded-full border border-white/15 text-smoke transition hover:border-gold/60 hover:text-gold"
              aria-label="Facebook Page"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/differentanglebyabid/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-11 items-center justify-center rounded-full border border-white/15 text-smoke transition hover:border-gold/60 hover:text-gold"
              aria-label="Instagram — Different Angle by Abid"
            >
              <Instagram size={18} />
            </a>
          </div>
          <p className="text-sm text-smoke">
            © 2026 Different Angle by Abid. All frames captured with
            intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
