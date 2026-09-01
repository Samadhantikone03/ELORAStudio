import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "@/components/features/FooterSection";
import PressStrip from "@/components/features/PressStrip";

import casaVerdeHero from "@/assets/casaverde-hero.jpg";
import casaVerdeDetail1 from "@/assets/casaverde-detail1.jpg";
import casaVerdeBedroom from "@/assets/casaverde-bedroom.jpg";
import casaVerdeKitchen from "@/assets/casaverde-kitchen.jpg";
import casaVerdeBathroom from "@/assets/casaverde-bathroom.jpg";
import projectCourtyard from "@/assets/project-courtyard.jpg";

const details = [
  { label: "Location", value: "Koregaon Park, Pune" },
  { label: "Year", value: "2024" },
  { label: "Scope", value: "Full Interiors" },
  { label: "Area", value: "4,200 sq ft" },
  { label: "Status", value: "Completed" },
];

const photos = [
  { src: casaVerdeDetail1, alt: "Travertine detail, living room", aspect: "4/3" },
  { src: casaVerdeBedroom, alt: "Master bedroom", aspect: "4/3" },
  { src: casaVerdeKitchen, alt: "Kitchen and dining", aspect: "3/2" },
  { src: casaVerdeBathroom, alt: "Master bathroom", aspect: "4/3" },
];

function RevealBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ClipReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
      animate={inView ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectDetail() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <div className="min-h-screen bg-ivory overflow-x-hidden">
      <Navbar />

      {/* Hero — full screen parallax */}
      <div ref={heroRef} className="relative h-[75vh] md:h-[90vh] overflow-hidden">
        <motion.img
          src={casaVerdeHero}
          alt="Casa Verde hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: heroY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

        {/* Hero overlay content */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 md:p-14 lg:p-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-white/60 text-[10px] font-sans uppercase tracking-[0.3em] mb-3">
            Residential · Pune · 2024
          </p>
          <h1
            className="font-serif font-light text-white leading-[0.95] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.6rem, 7vw, 6.5rem)" }}
          >
            Casa Verde
          </h1>
        </motion.div>
      </div>

      {/* Project intro + details sidebar */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
          {/* Left: editorial story */}
          <div className="space-y-8">
            <RevealBlock>
              <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-text-muted mb-5">Project Story</p>
              <h2
                className="font-serif font-light text-text-primary leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
              >
                A warm contemporary residence built around natural stone, soft light, and understated materiality.
              </h2>
            </RevealBlock>

            <RevealBlock delay={0.1}>
              <div className="w-10 h-px bg-arch-sand" />
            </RevealBlock>

            <RevealBlock delay={0.15}>
              <p className="text-text-secondary font-sans text-[14px] leading-[1.85] max-w-xl">
                Casa Verde began with a single intention — to create a home that feels entirely at ease with itself. Set within a leafy residential enclave in Koregaon Park, the 4,200 sq ft residence was designed around the rhythms of daily life: morning light moving across stone floors, the density of a well-chosen material against soft linen, the silence of a thoughtfully arranged room.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.2}>
              <p className="text-text-secondary font-sans text-[14px] leading-[1.85] max-w-xl">
                Our approach centred on material honesty. Locally sourced Kota stone, bookmatched walnut veneer panels, and honed Italian marble were selected not for spectacle but for their texture and ageing quality. The palette — warm ivory, deep walnut, brushed brass — was held constant across all surfaces, allowing the architecture of the space to speak clearly.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.25}>
              <p className="text-text-secondary font-sans text-[14px] leading-[1.85] max-w-xl">
                Every piece of furniture was either bespoke or carefully curated from European ateliers. The living room anchor — a hand-cast travertine coffee table — became the compositional centre of the ground floor, informing proportions in every adjacent space.
              </p>
            </RevealBlock>
          </div>

          {/* Right: project details sidebar */}
          <RevealBlock delay={0.1}>
            <div className="lg:sticky lg:top-32 self-start">
              <div className="bg-white/50 border border-arch-stone/40 rounded-3xl p-8 space-y-0">
                <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-text-muted mb-6">Project Details</p>
                <div className="space-y-0 divide-y divide-arch-stone/30">
                  {details.map((d) => (
                    <div key={d.label} className="flex justify-between items-center py-4">
                      <span className="text-[11px] font-sans uppercase tracking-widest text-text-muted">{d.label}</span>
                      <span className="font-serif text-[15px] text-text-primary font-light">{d.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 mt-2">
                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full bg-arch-dark text-white text-[10px] font-sans uppercase tracking-widest px-5 py-3.5 rounded-full hover:pl-6 transition-all duration-300 group"
                  >
                    <span>Discuss a Similar Project</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Photo grid */}
      <section className="max-w-[1300px] mx-auto px-6 lg:px-12 pb-16 md:pb-24 space-y-5">
        <RevealBlock>
          <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-text-muted mb-8">Photography</p>
        </RevealBlock>

        {/* Row 1: two equal photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {photos.slice(0, 2).map((photo, i) => (
            <ClipReveal key={photo.alt} delay={i * 0.1}>
              <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: photo.aspect }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </ClipReveal>
          ))}
        </div>

        {/* Row 2: wide + narrow */}
        <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-5">
          <ClipReveal delay={0.05}>
            <div className="rounded-3xl overflow-hidden aspect-[3/2]">
              <img
                src={photos[2].src}
                alt={photos[2].alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </ClipReveal>
          <ClipReveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-full">
              <img
                src={photos[3].src}
                alt={photos[3].alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </ClipReveal>
        </div>
      </section>

      {/* Pull quote */}
      <section className="max-w-[800px] mx-auto px-6 py-16 md:py-24 text-center">
        <RevealBlock>
          <span className="font-serif text-[80px] leading-none text-arch-stone/60 block mb-0 -mb-6 select-none">"</span>
          <blockquote
            className="font-serif font-light text-text-primary leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)" }}
          >
            The house feels different each hour of the day. That was exactly what we asked for — and exactly what we received.
          </blockquote>
          <p className="text-text-muted text-[11px] font-sans uppercase tracking-[0.2em] mt-6">
            — Client, Koregaon Park
          </p>
        </RevealBlock>
      </section>

      {/* Next project */}
      <section className="border-t border-arch-stone/40 max-w-[1200px] mx-auto mx-6 lg:mx-12 px-6 lg:px-12 py-12">
        <RevealBlock>
          <Link
            to="/"
            className="flex items-center justify-between group cursor-pointer"
          >
            <div>
              <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-text-muted mb-2">Next Project</p>
              <h3
                className="font-serif font-light text-text-primary group-hover:opacity-70 transition-opacity duration-300"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}
              >
                The Courtyard House
              </h3>
              <p className="text-text-muted text-[11px] font-sans mt-1">Architecture + Interiors</p>
            </div>
            <div className="relative w-32 h-24 md:w-48 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 ml-8">
              <img
                src={projectCourtyard}
                alt="The Courtyard House"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
              />
            </div>
          </Link>
        </RevealBlock>
      </section>

      <PressStrip />
      <FooterSection />
    </div>
  );
}
