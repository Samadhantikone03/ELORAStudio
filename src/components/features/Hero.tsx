import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section className="relative pt-36 pb-0 md:pt-44 px-6 text-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-nav font-sans uppercase tracking-[0.25em] text-text-muted mb-6"
        >
          Est. 2016 · Design Studio
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif font-light text-text-primary leading-[0.95] tracking-[-0.02em] mb-3"
          style={{ fontSize: "clamp(2.5rem, 7.5vw, 6rem)" }}
        >
          Spaces Designed
          <br />
          <em className="not-italic" style={{ fontStyle: "italic" }}>To Feel Like Home</em>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          variants={itemVariants}
          className="text-text-secondary font-sans text-[13px] leading-relaxed max-w-xs mx-auto mt-6 mb-8"
        >
          Thoughtful interiors shaped by material,<br />
          light, proportion and everyday living.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-arch-dark text-white text-[11px] font-sans uppercase tracking-widest px-7 py-3.5 rounded-full hover:gap-3.5 transition-all duration-300 group"
          >
            <span>Explore Our Work</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-text-primary/25 text-text-secondary text-[11px] font-sans uppercase tracking-widest px-7 py-3.5 rounded-full hover:border-text-primary hover:text-text-primary transition-all duration-300"
          >
            Our Services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
