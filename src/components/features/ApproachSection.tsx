import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ApproachSection() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Subtle architectural background stripe — parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(185,170,149,0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div
        ref={ref}
        className="max-w-[900px] mx-auto px-6 text-center py-24 md:py-36 lg:py-44"
      >
        {/* Eyebrow */}
        <motion.p
          className="text-[10px] font-sans uppercase tracking-[0.3em] text-text-muted mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our Approach
        </motion.p>

        {/* Main headline */}
        <motion.h2
          className="font-serif font-light text-text-primary text-balance"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Every Space Has A Story,<br />
          <em style={{ fontStyle: "italic" }}>We Shape The Way It Feels</em>
        </motion.h2>

        {/* Horizontal rule */}
        <motion.div
          className="flex items-center gap-6 justify-center my-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex-1 max-w-[80px] h-px bg-arch-stone" />
          <div className="w-1 h-1 rounded-full bg-arch-sand" />
          <div className="flex-1 max-w-[80px] h-px bg-arch-stone" />
        </motion.div>

        {/* Body */}
        <motion.p
          className="text-text-secondary font-sans text-[13.5px] leading-relaxed max-w-md mx-auto"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          From the first sketch to the final detail, we create interiors
          that balance beauty, function and the character of the people
          who live in them.
        </motion.p>

        {/* Stat row */}
        <motion.div
          className="flex items-start justify-center gap-10 md:gap-16 mt-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          {[
            { num: "87+", label: "Projects Completed" },
            { num: "10", label: "Years of Practice" },
            { num: "9", label: "Design Awards" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-[2rem] font-light text-text-primary tracking-[-0.02em] leading-none mb-1.5">
                {stat.num}
              </p>
              <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
