import Link from "next/link";
import { footerNav } from "@/data/navigation";
export { Header } from "./header";

export function Footer() {
  return (
    <footer className="footer bg-[#1F5B41]">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/">
              <span className="site-logo">
                <img
                  src="/rhec-brand-logo.png"
                  alt="Roanoke Higher Education Center"
                />
              </span>
            </Link>
            <p className="footer-addr">
              108 North Jefferson Street
              <br />
              Roanoke, VA 24016
              <br />
              <br />
              <a href="tel:5407676000">(540) 767-6000</a>
            </p>
            <div className="footer-social">
              <a href="#social-facebook" aria-label="Facebook">
                f
              </a>
              <a href="#social-linkedin" aria-label="LinkedIn">
                in
              </a>
              <a href="#social-twitter" aria-label="Twitter/X">
                𝕏
              </a>
            </div>
          </div>

          <div>
            <h3>Explore</h3>
            {footerNav.explore.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h3>About</h3>
            {footerNav.about.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h3>Resources</h3>
            {footerNav.resources.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="copyright">
          <span>© 2026 Roanoke Higher Education Center</span>
          <span>
            Design demo · Content is illustrative and not for production use.
          </span>
        </div>
      </div>
    </footer>
  );
}
