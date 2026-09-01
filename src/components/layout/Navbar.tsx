import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const leftLinks = [
  { label: "Studio", href: "/" },
  { label: "Projects", href: "/projects/casa-verde" },
  { label: "Services", href: "/services" },
];
const rightLinks = [
  { label: "About", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "More", href: "/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 bg-ivory/92 backdrop-blur-sm border-b border-arch-stone/20" : "py-5 bg-transparent"
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Left nav */}
            <nav className="hidden md:flex items-center gap-7">
              {leftLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-nav font-sans uppercase tracking-widest transition-colors duration-300 relative group ${
                    location.pathname === link.href ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-text-primary transition-all duration-300 ${
                      location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Center logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="font-serif text-[22px] font-light tracking-[0.22em] text-text-primary leading-none">
                ARKA
              </span>
              <span className="text-[8px] font-sans uppercase tracking-[0.35em] text-text-muted mt-0.5">
                Interiors
              </span>
            </Link>

            {/* Right nav */}
            <div className="flex items-center gap-7">
              <nav className="hidden md:flex items-center gap-7">
                {rightLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-nav font-sans uppercase tracking-widest transition-colors duration-300 relative group ${
                      location.pathname === link.href ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-text-primary transition-all duration-300 ${
                        location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <Link
                to="/contact"
                className="hidden md:flex items-center gap-2 bg-arch-dark text-white text-[10px] font-sans uppercase tracking-widest px-4 py-2 rounded-full hover:gap-3 transition-all duration-300 group"
              >
                <span>Start a Project</span>
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden flex flex-col gap-1.5 p-1"
                aria-label="Open menu"
              >
                <span className="w-5 h-px bg-text-primary block" />
                <span className="w-4 h-px bg-text-primary block" />
                <span className="w-5 h-px bg-text-primary block" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-ivory flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex justify-between items-center px-6 py-5 border-b border-arch-stone/30">
              <Link to="/" className="font-serif text-[20px] tracking-[0.2em] text-text-primary">ARKA</Link>
              <button onClick={() => setMenuOpen(false)} className="text-text-secondary text-xl">✕</button>
            </div>
            <nav className="flex flex-col gap-1 px-6 py-8">
              {[...leftLinks, ...rightLinks].map((link, i) => (
                <motion.div key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="block font-serif text-[28px] font-light text-text-primary py-2 border-b border-arch-stone/20 hover:text-text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="mt-8 inline-block bg-arch-dark text-white text-[11px] uppercase tracking-widest px-5 py-3 rounded-full"
                >
                  Start a Project →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
