import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wide-shell">
        <div className="footer-top">
          <div>
            <p className="eyeline">Keep in touch</p>
            <a
              href="mailto:abidshahriar1294@gmail.com"
              className="footer-invitation"
            >
              Let’s talk.
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="footer-links">
            <a
              href="https://www.instagram.com/differentanglebyabid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/share/14d6NZifkbB/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <Link to="/contact">
              Contact <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <Link to="/" className="footer-brand">
            Different Angle <span>by Abid</span>
          </Link>
          <p>
            © {new Date().getFullYear()} Abid Shahriar. All photographs
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
