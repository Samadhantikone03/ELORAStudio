import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "@/components/features/FooterSection";
import PressStrip from "@/components/features/PressStrip";

import servicesHero from "@/assets/services-hero.jpg";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceHospitality from "@/assets/service-hospitality.jpg";
import serviceArchitecture from "@/assets/service-architecture.jpg";

const services = [
  {
    id: "residential",
    number: "01",
    title: "Residential Design",
    subtitle: "Private homes, villas & apartments",
    image: serviceResidential,
    description:
      "We work closely with homeowners to create deeply personal spaces — interiors that are shaped by the way you live, the materials that move you, and the light that defines your daily rhythm.",
    pricing: "From ₹45 / sq ft",
    duration: "4–14 months",
    steps: [
      { title: "Discovery", desc: "Site visit, lifestyle brief, aspirational references" },
      { title: "Concept", desc: "Spatial planning, material board, mood direction" },
      { title: "Design Development", desc: "Working drawings, custom furniture design, FF&E" },
      { title: "Execution", desc: "Site supervision, vendor coordination, installation" },
    ],
    scope: [
      "Full interior design",
      "Custom furniture & joinery",
      "Lighting design",
      "Art & object curation",
      "Material & finish selection",
      "Site supervision",
    ],
  },
  {
    id: "hospitality",
    number: "02",
    title: "Commercial & Hospitality",
    subtitle: "Hotels, restaurants & boutiques",
    image: serviceHospitality,
    description:
      "Commercial interiors demand a balance between operational intelligence and atmospheric richness. We design hospitality spaces that feel immediately distinctive — environments guests return to because of how they make them feel.",
    pricing: "Custom quote",
    duration: "8–24 months",
    steps: [
      { title: "Strategy", desc: "Brand alignment, guest journey mapping, program planning" },
      { title: "Concept Design", desc: "Spatial narrative, atmosphere, key material palette" },
      { title: "Technical Design", desc: "Working drawings, MEP coordination, specifications" },
      { title: "Delivery", desc: "Contractor coordination, quality control, final install" },
    ],
    scope: [
      "Hotel lobby & reception",
      "F&B and bar design",
      "Guest room concepts",
      "Retail & boutique spaces",
      "Office & co-working",
      "Brand-aligned environments",
    ],
  },
  {
    id: "architecture",
    number: "03",
    title: "Architecture Consulting",
    subtitle: "Full architecture + interiors",
    image: serviceArchitecture,
    description:
      "For projects where architecture and interiors are developed in complete harmony. We collaborate from the earliest sketch — resolving structure, proportion, envelope and interior experience as a single integrated vision.",
    pricing: "From ₹120 / sq ft",
    duration: "12–36 months",
    steps: [
      { title: "Feasibility", desc: "Site analysis, zoning review, program development" },
      { title: "Schematic Design", desc: "Architectural massing, spatial organisation, concept" },
      { title: "Detailed Design", desc: "Working drawings, structural coordination, interiors" },
      { title: "Construction", desc: "Full site supervision, contract management, completion" },
    ],
    scope: [
      "Architecture + master planning",
      "Landscape integration",
      "Structural coordination",
      "Full interior design",
      "Permit documentation",
      "Site supervision",
    ],
  },
];

function RevealBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
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

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div className="min-h-screen bg-ivory overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <div ref={heroRef} className="relative h-[55vh] md:h-[70vh] overflow-hidden">
        <motion.img
          src={servicesHero}
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: heroY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 md:p-14 lg:p-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-white/60 text-[10px] font-sans uppercase tracking-[0.3em] mb-3">What We Do</p>
          <h1
            className="font-serif font-light text-white leading-[0.95] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 6rem)" }}
          >
            Our Services
          </h1>
        </motion.div>
      </div>

      {/* Intro */}
      <section className="max-w-[900px] mx-auto px-6 lg:px-12 py-16 md:py-24 text-center">
        <RevealBlock>
          <h2
            className="font-serif font-light text-text-primary leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)" }}
          >
            Three disciplines. One coherent vision.
          </h2>
          <p className="text-text-secondary text-[13.5px] font-sans leading-relaxed max-w-xl mx-auto">
            Whether you're furnishing a single apartment, designing a hotel from the ground up, or reimagining an entire building, our approach is always the same — deeply considered, materially honest, and tuned to the people who will live inside it.
          </p>
        </RevealBlock>
      </section>

      {/* Service tiers */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-24 md:pb-36 space-y-28 md:space-y-36">
        {services.map((service, si) => (
          <div key={service.id} id={service.id}>
            {/* Service title row */}
            <RevealBlock>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 border-b border-arch-stone/40 pb-6">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-text-muted block mb-3">
                    {service.number}
                  </span>
                  <h2
                    className="font-serif font-light text-text-primary leading-[1.0] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-text-muted text-[12px] font-sans uppercase tracking-widest mt-2">{service.subtitle}</p>
                </div>
                <div className="mt-5 md:mt-0 flex items-center gap-6 md:gap-8">
                  <div className="text-right">
                    <p className="text-[9px] font-sans uppercase tracking-widest text-text-muted mb-1">Investment</p>
                    <p className="font-serif text-[15px] text-text-primary">{service.pricing}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-sans uppercase tracking-widest text-text-muted mb-1">Duration</p>
                    <p className="font-serif text-[15px] text-text-primary">{service.duration}</p>
                  </div>
                </div>
              </div>
            </RevealBlock>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left: image */}
              <ClipReveal delay={si % 2 === 0 ? 0 : 0.1}>
                <div className={`rounded-3xl overflow-hidden aspect-[4/3] ${si % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              </ClipReveal>

              {/* Right: details */}
              <div className={`space-y-8 ${si % 2 !== 0 ? "lg:order-1" : ""}`}>
                <RevealBlock delay={0.1}>
                  <p className="text-text-secondary font-sans text-[13.5px] leading-[1.85]">
                    {service.description}
                  </p>
                </RevealBlock>

                {/* Process steps */}
                <RevealBlock delay={0.15}>
                  <p className="text-[9px] font-sans uppercase tracking-[0.28em] text-text-muted mb-4">Our Process</p>
                  <div className="space-y-0 divide-y divide-arch-stone/30">
                    {service.steps.map((step, i) => (
                      <div key={step.title} className="flex items-start gap-4 py-4">
                        <span className="text-[10px] font-sans text-text-muted mt-0.5 w-4 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-[13px] font-sans font-medium text-text-primary mb-0.5">{step.title}</p>
                          <p className="text-[12px] font-sans text-text-secondary">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </RevealBlock>

                {/* Scope */}
                <RevealBlock delay={0.2}>
                  <p className="text-[9px] font-sans uppercase tracking-[0.28em] text-text-muted mb-4">Scope Includes</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {service.scope.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-arch-sand flex-shrink-0" />
                        <span className="text-[12px] font-sans text-text-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </RevealBlock>

                <RevealBlock delay={0.25}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-arch-dark text-white text-[10px] font-sans uppercase tracking-widest px-6 py-3 rounded-full hover:gap-3 transition-all duration-300 group"
                  >
                    <span>Enquire About This Service</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </RevealBlock>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Full-width CTA band */}
      <section className="bg-text-primary py-20 md:py-28 px-6 text-center">
        <RevealBlock>
          <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-white/40 mb-5">Ready to Begin?</p>
          <h2
            className="font-serif font-light text-white leading-[1.0] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)" }}
          >
            Every project starts with<br />
            <em style={{ fontStyle: "italic" }}>a single conversation.</em>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-arch-dark text-[11px] font-sans uppercase tracking-widest px-7 py-3.5 rounded-full hover:gap-3.5 transition-all duration-300 group"
          >
            <span>Start a Project</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </RevealBlock>
      </section>

      <PressStrip />
      <FooterSection />
    </div>
  );
}
