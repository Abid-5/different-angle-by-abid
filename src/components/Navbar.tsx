import { Camera, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Stories", to: "/stories" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-ink/82 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="section-shell flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
          aria-label="Different Angle home"
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gold transition group-hover:border-gold/60">
            <Camera size={18} aria-hidden="true" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-semibold text-bone">
              Different Angle
            </span>
            <span className="mt-1 block text-xs tracking-[0.28em] text-smoke">
              by Abid
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white/10 text-bone"
                    : "text-smoke hover:bg-white/7 hover:text-bone"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/experiments" className="ghost-button ml-3 min-h-10 px-4">
            Experiments
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-bone md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-x-0 top-20 z-[75] mx-auto w-full max-w-7xl px-5 pb-5 sm:px-8 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            <div className="glass-line grid gap-2 rounded-[8px] p-3">
              {[...navItems, { label: "Experiments", to: "/experiments" }].map(
                (item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-[6px] px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "bg-white/10 text-bone"
                          : "text-smoke hover:bg-white/7 hover:text-bone"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
