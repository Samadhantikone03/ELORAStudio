import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/features/ProjectCard";
import projectCasaVerde from "@/assets/project-casa-verde.jpg";
import projectCourtyard from "@/assets/project-courtyard.jpg";
import projectStudio07 from "@/assets/project-studio07.jpg";

const projects = [
  {
    id: 1,
    image: projectCasaVerde,
    name: "Casa Verde",
    category: "Residential · Pune",
    description: "A warm contemporary residence built around natural stone, soft light and understated materiality.",
    size: "large",
    href: "/projects/casa-verde",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    name: "Residence 04",
    category: "Modern Residential",
    description: "Quietly curated spaces where proportion and restraint define every room.",
    size: "small-text",
    href: "/projects/casa-verde",
  },
  {
    id: 3,
    image: projectCourtyard,
    name: "The Courtyard House",
    category: "Architecture + Interiors",
    description: "An open dialogue between interior and exterior, stone and sky.",
    size: "small-text",
    href: "/projects/casa-verde",
  },
  {
    id: 4,
    image: projectStudio07,
    name: "Studio No. 07",
    category: "Hospitality Interior",
    description: "A boutique hospitality interior of warm concrete, brushed metal and considered light.",
    size: "large",
    href: "/projects/casa-verde",
  },
];

export default function ProjectGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} className="max-w-[1300px] mx-auto px-6 lg:px-12 pb-24 md:pb-36">
      {/* Section header */}
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div>
          <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-text-muted mb-3">Selected Work</p>
          <h2
            className="font-serif font-light text-text-primary"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
          >
            Recent Projects
          </h2>
        </div>
        <Link
          to="/projects/casa-verde"
          className="mt-4 md:mt-0 self-start md:self-auto text-[11px] font-sans uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300 group flex items-center gap-2"
        >
          View all work
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </motion.div>

      {/* Desktop asymmetric grid */}
      <div className="hidden md:block space-y-5">
        {/* Row 1: large left + small right */}
        <div className="grid gap-5" style={{ gridTemplateColumns: "65fr 35fr" }}>
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(14% 0% 0% 0%)" }}
            animate={inView ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ProjectCard project={projects[0]} aspect="wide" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ProjectCard project={projects[1]} aspect="tall" textOnly />
          </motion.div>
        </div>

        {/* Row 2: small left + large right */}
        <div className="grid gap-5" style={{ gridTemplateColumns: "35fr 65fr" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ProjectCard project={projects[2]} aspect="tall" textOnly />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(14% 0% 0% 0%)" }}
            animate={inView ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ProjectCard project={projects[3]} aspect="wide" />
          </motion.div>
        </div>
      </div>

      {/* Mobile: stacked editorial cards */}
      <div className="md:hidden space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ProjectCard project={project} aspect="mobile" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
