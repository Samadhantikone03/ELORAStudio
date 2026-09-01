import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Timeless Materials",
    description:
      "Natural materials, refined textures and carefully selected finishes create spaces that remain relevant beyond trends.",
  },
  {
    number: "02",
    title: "Considered Details",
    description:
      "Every proportion, surface and object is selected to create a cohesive and intentional interior.",
  },
  {
    number: "03",
    title: "Quiet Luxury",
    description:
      "Elegant spaces defined by restraint, warmth and an effortless sense of sophistication.",
  },
];

export default function FeatureColumns() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-16 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {features.map((feat, i) => (
          <motion.div
            key={feat.number}
            className={`relative py-8 md:py-10 px-0 md:px-8 ${
              i < features.length - 1
                ? "border-b md:border-b-0 md:border-r border-arch-stone/50"
                : ""
            } ${i > 0 ? "md:pl-12" : ""}`}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Number */}
            <span className="block text-[10px] font-sans uppercase tracking-[0.25em] text-text-muted mb-4">
              {feat.number}
            </span>

            {/* Title */}
            <h3 className="font-serif text-[19px] md:text-[21px] font-light text-text-primary tracking-[-0.01em] mb-3">
              {feat.title}
            </h3>

            {/* Divider */}
            <motion.div
              className="w-8 h-px bg-arch-sand mb-4"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.14 + 0.3 }}
            />

            {/* Description */}
            <p className="text-text-secondary text-[12.5px] font-sans leading-relaxed max-w-xs">
              {feat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
