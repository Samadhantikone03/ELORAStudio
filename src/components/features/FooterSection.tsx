import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer className="bg-arch-dark text-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 md:pt-28 pb-12 md:pb-16">
        {/* Large statement */}
        <motion.div
          className="text-center mb-14 md:mb-18"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2
            className="font-serif font-light text-white leading-[1.0] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
          >
            Let's create a space<br />
            <em style={{ fontStyle: "italic" }}>worth remembering.</em>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-arch-dark text-[11px] font-sans uppercase tracking-widest px-7 py-3.5 rounded-full hover:gap-3.5 transition-all duration-300 group mt-4"
          >
            <span>Start a Project</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-10" />

        {/* Footer bottom row */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center md:items-start">
            <span className="font-serif text-[18px] tracking-[0.25em] text-white">ARKA</span>
            <span className="text-[8px] font-sans uppercase tracking-[0.35em] text-white/40 mt-0.5">Interiors</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-7">
            {[
              { label: "Projects", href: "/projects/casa-verde" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[10px] font-sans uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-7">
            {["Instagram", "Pinterest", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] font-sans uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[10px] font-sans text-white/30 tracking-wide">
            © 2026 ARKA Interiors
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
