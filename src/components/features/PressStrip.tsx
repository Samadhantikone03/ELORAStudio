import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const publications = [
  { name: "Architectural Digest", abbr: "AD" },
  { name: "Elle Decor", abbr: "Elle Décor" },
  { name: "Wallpaper*", abbr: "Wallpaper*" },
  { name: "Vogue Living", abbr: "Vogue Living" },
  { name: "Dezeen", abbr: "Dezeen" },
];

const awards = [
  { year: "2024", title: "Best Residential Interior", org: "Design Excellence Awards" },
  { year: "2023", title: "Emerging Studio of the Year", org: "IIDA India" },
  { year: "2022", title: "Outstanding Use of Natural Materials", org: "Architectural Record" },
];

export default function PressStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="border-t border-arch-stone/30 bg-ivory-dark/40 py-14 md:py-18 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p
          className="text-[9px] font-sans uppercase tracking-[0.35em] text-text-muted text-center mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured In & Recognised By
        </motion.p>

        {/* Publications row */}
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-4 md:gap-x-12 mb-12">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.name}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="group cursor-default"
            >
              <span
                className="font-serif text-[18px] md:text-[22px] font-light text-text-secondary/50 group-hover:text-text-secondary transition-colors duration-400 tracking-[-0.01em] select-none"
              >
                {pub.abbr}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-arch-stone/40 mb-10 max-w-[400px] mx-auto"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        />

        {/* Awards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-arch-stone/30">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              className="bg-ivory-dark/30 px-6 py-6 md:px-8 md:py-7 text-center"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="block text-[9px] font-sans uppercase tracking-[0.28em] text-text-muted mb-2.5">
                {award.year}
              </span>
              <p className="font-serif text-[15px] md:text-[16px] font-light text-text-primary leading-snug mb-1.5">
                {award.title}
              </p>
              <p className="text-[10px] font-sans text-text-muted tracking-wide">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
