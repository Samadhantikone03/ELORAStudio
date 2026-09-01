import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  image: string;
  name: string;
  category: string;
  description: string;
  size: string;
  href?: string;
}

interface ProjectCardProps {
  project: Project;
  aspect: "wide" | "tall" | "mobile";
  textOnly?: boolean;
}

export default function ProjectCard({ project, aspect, textOnly = false }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const href = project.href || "#";

  const heights: Record<string, string> = {
    wide: "h-[440px] lg:h-[520px]",
    tall: "h-[440px] lg:h-[520px]",
    mobile: "h-[320px]",
  };

  if (textOnly) {
    return (
      <div
        className={`relative rounded-[20px] overflow-hidden bg-ivory-dark border border-arch-stone/40 flex flex-col justify-between p-8 lg:p-10 ${heights[aspect]} cursor-pointer group`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Small image inset */}
        <div className="relative w-full h-36 rounded-[12px] overflow-hidden mb-6">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div>
          <p className="text-[10px] font-sans uppercase tracking-[0.22em] text-text-muted mb-3">
            {project.category}
          </p>
          <h3
            className="font-serif font-light text-text-primary mb-3 leading-tight"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}
          >
            {project.name}
          </h3>
          <p className="text-text-secondary text-[12px] font-sans leading-relaxed mb-6">
            {project.description}
          </p>
          <motion.div animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.3 }}>
            <Link
              to={href}
              className="inline-flex items-center gap-2 text-text-primary text-[11px] font-sans uppercase tracking-widest group/link"
            >
              <span className="border-b border-text-primary/40 group-hover/link:border-text-primary transition-colors duration-300">
                View Project
              </span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={href}
      className={`relative rounded-[20px] overflow-hidden ${heights[aspect]} cursor-pointer group block`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
      />
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.12) 50%, transparent 100%)",
          opacity: hovered ? 1 : 0.85,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
        <motion.p
          className="text-[9px] font-sans uppercase tracking-[0.25em] text-white/70 mb-2"
          animate={{ opacity: hovered ? 1 : 0.7 }}
        >
          {project.category}
        </motion.p>
        <motion.h3
          className="font-serif font-light text-white leading-tight mb-3"
          style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", letterSpacing: "-0.01em" }}
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {project.name}
        </motion.h3>
        <motion.p
          className="text-white/75 text-[12px] font-sans leading-relaxed max-w-sm mb-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.35 }}
        >
          {project.description}
        </motion.p>
        <motion.span
          className="inline-flex items-center gap-2 text-white/90 text-[10px] font-sans uppercase tracking-widest"
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
          transition={{ duration: 0.35 }}
        >
          View Project →
        </motion.span>
      </div>
    </Link>
  );
}
