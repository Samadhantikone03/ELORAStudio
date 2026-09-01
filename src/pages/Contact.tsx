import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "@/components/features/FooterSection";
import PressStrip from "@/components/features/PressStrip";

const projectTypes = [
  { id: "residential", label: "Residential", desc: "Private homes, apartments, villas" },
  { id: "hospitality", label: "Hospitality", desc: "Hotels, restaurants, boutiques" },
  { id: "commercial", label: "Commercial", desc: "Offices, co-working spaces" },
  { id: "architecture", label: "Architecture", desc: "Full architecture & interiors" },
];

const budgetRanges = [
  { id: "b1", label: "₹25L – ₹75L", desc: "Focused scope, high impact" },
  { id: "b2", label: "₹75L – ₹2Cr", desc: "Comprehensive residential" },
  { id: "b3", label: "₹2Cr – ₹5Cr", desc: "Large-scale or commercial" },
  { id: "b4", label: "₹5Cr+", desc: "Premium or multi-space project" },
];

const timelines = [
  { id: "t1", label: "Under 6 months", desc: "Focused, fast-tracked delivery" },
  { id: "t2", label: "6–12 months", desc: "Standard residential timeline" },
  { id: "t3", label: "12–24 months", desc: "Full architecture & build" },
  { id: "t4", label: "Flexible", desc: "No fixed deadline" },
];

const locations = [
  "Mumbai", "Pune", "Delhi NCR", "Bangalore", "Hyderabad", "Chennai", "Goa", "International"
];

const stepVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
};

export default function Contact() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [selected, setSelected] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDir(1);
    setSubmitted(true);
  };

  const steps = [
    { num: 1, label: "Project" },
    { num: 2, label: "Details" },
    { num: 3, label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-ivory overflow-x-hidden">
      <Navbar />

      {/* Page header */}
      <section className="pt-36 md:pt-44 pb-12 px-6 text-center max-w-3xl mx-auto">
        <motion.p
          className="text-[10px] font-sans uppercase tracking-[0.3em] text-text-muted mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let's Begin
        </motion.p>
        <motion.h1
          className="font-serif font-light text-text-primary leading-[1.0] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Start a Project
        </motion.h1>
        <motion.p
          className="text-text-secondary text-[13px] font-sans mt-5 max-w-sm mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Tell us about your vision. We'll be in touch within 48 hours to discuss how we can shape it together.
        </motion.p>
      </section>

      {/* Form container */}
      <section className="max-w-[760px] mx-auto px-6 pb-24 md:pb-36">
        {!submitted ? (
          <>
            {/* Step indicator */}
            <motion.div
              className="flex items-center justify-center gap-0 mb-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center">
                  <button
                    onClick={() => s.num < step && go(s.num)}
                    className={`flex flex-col items-center gap-1.5 group ${s.num < step ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-sans transition-all duration-400 ${
                        step === s.num
                          ? "bg-arch-dark text-white"
                          : step > s.num
                          ? "bg-arch-sand text-text-primary"
                          : "bg-arch-stone/40 text-text-muted"
                      }`}
                    >
                      {step > s.num ? "✓" : s.num}
                    </div>
                    <span
                      className={`text-[9px] uppercase tracking-widest font-sans ${
                        step === s.num ? "text-text-primary" : "text-text-muted"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                  {i < steps.length - 1 && (
                    <div className={`w-16 md:w-24 h-px mx-3 mt-[-14px] transition-colors duration-500 ${step > s.num ? "bg-arch-sand" : "bg-arch-stone/40"}`} />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Steps */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={dir}>
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={dir}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Step1 selected={selected} setSelected={setSelected} onNext={() => go(2)} />
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={dir}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Step2 selected={selected} setSelected={setSelected} onNext={() => go(3)} onBack={() => go(1)} />
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={dir}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Step3 selected={selected} setSelected={setSelected} onBack={() => go(2)} onSubmit={handleSubmit} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <motion.div
            className="text-center py-16 md:py-24"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-12 h-12 rounded-full bg-arch-sand/30 flex items-center justify-center mx-auto mb-8">
              <span className="text-text-primary text-xl">✓</span>
            </div>
            <h2
              className="font-serif font-light text-text-primary mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Thank you, {selected.name || "friend"}.
            </h2>
            <p className="text-text-secondary text-[13px] font-sans max-w-sm mx-auto leading-relaxed mb-8">
              Your enquiry has been received. We'll review your project brief and reach out within 48 hours.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 border border-text-primary/30 text-text-primary text-[11px] font-sans uppercase tracking-widest px-6 py-3 rounded-full hover:border-text-primary transition-colors duration-300 group"
            >
              <span>Back to Studio</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        )}
      </section>

      <PressStrip />
      <FooterSection />
    </div>
  );
}

/* ── Step 1: Project Type + Budget ── */
function Step1({
  selected,
  setSelected,
  onNext,
}: {
  selected: ReturnType<typeof useState<typeof selected>>[0];
  setSelected: (v: typeof selected) => void;
  onNext: () => void;
}) {
  const sel = selected as { projectType: string; budget: string };
  return (
    <div className="space-y-10">
      {/* Project type */}
      <div>
        <label className="block text-[10px] font-sans uppercase tracking-[0.25em] text-text-muted mb-5">
          01 — Project Type
        </label>
        <div className="grid grid-cols-2 gap-3">
          {projectTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected({ ...selected, projectType: t.id })}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                sel.projectType === t.id
                  ? "border-text-primary bg-text-primary text-white"
                  : "border-arch-stone/50 bg-white/50 hover:border-arch-sand hover:bg-white"
              }`}
            >
              <span className={`block text-[13px] font-serif font-light mb-1 ${sel.projectType === t.id ? "text-white" : "text-text-primary"}`}>
                {t.label}
              </span>
              <span className={`text-[11px] font-sans ${sel.projectType === t.id ? "text-white/70" : "text-text-muted"}`}>
                {t.desc}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-[10px] font-sans uppercase tracking-[0.25em] text-text-muted mb-5">
          02 — Budget Range
        </label>
        <div className="grid grid-cols-2 gap-3">
          {budgetRanges.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelected({ ...selected, budget: b.id })}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                sel.budget === b.id
                  ? "border-text-primary bg-text-primary text-white"
                  : "border-arch-stone/50 bg-white/50 hover:border-arch-sand hover:bg-white"
              }`}
            >
              <span className={`block text-[13px] font-serif font-light mb-1 ${sel.budget === b.id ? "text-white" : "text-text-primary"}`}>
                {b.label}
              </span>
              <span className={`text-[11px] font-sans ${sel.budget === b.id ? "text-white/70" : "text-text-muted"}`}>
                {b.desc}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={onNext}
          disabled={!sel.projectType || !sel.budget}
          className="inline-flex items-center gap-2 bg-arch-dark text-white text-[11px] font-sans uppercase tracking-widest px-7 py-3.5 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:gap-3 transition-all duration-300 group"
        >
          <span>Continue</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </div>
  );
}

/* ── Step 2: Timeline + Location ── */
function Step2({
  selected,
  setSelected,
  onNext,
  onBack,
}: {
  selected: ReturnType<typeof useState<typeof selected>>[0];
  setSelected: (v: typeof selected) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const sel = selected as { timeline: string; location: string };
  return (
    <div className="space-y-10">
      {/* Timeline */}
      <div>
        <label className="block text-[10px] font-sans uppercase tracking-[0.25em] text-text-muted mb-5">
          03 — Ideal Timeline
        </label>
        <div className="grid grid-cols-2 gap-3">
          {timelines.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected({ ...selected, timeline: t.id })}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                sel.timeline === t.id
                  ? "border-text-primary bg-text-primary text-white"
                  : "border-arch-stone/50 bg-white/50 hover:border-arch-sand hover:bg-white"
              }`}
            >
              <span className={`block text-[13px] font-serif font-light mb-1 ${sel.timeline === t.id ? "text-white" : "text-text-primary"}`}>
                {t.label}
              </span>
              <span className={`text-[11px] font-sans ${sel.timeline === t.id ? "text-white/70" : "text-text-muted"}`}>
                {t.desc}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-[10px] font-sans uppercase tracking-[0.25em] text-text-muted mb-5">
          04 — Project Location
        </label>
        <div className="flex flex-wrap gap-2">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setSelected({ ...selected, location: loc })}
              className={`px-5 py-2.5 rounded-full text-[11px] font-sans uppercase tracking-widest border transition-all duration-300 ${
                sel.location === loc
                  ? "border-text-primary bg-text-primary text-white"
                  : "border-arch-stone/50 text-text-secondary hover:border-arch-sand hover:text-text-primary"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={onBack}
          className="text-[11px] font-sans uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300 flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span>Back</span>
        </button>
        <button
          onClick={onNext}
          disabled={!sel.timeline || !sel.location}
          className="inline-flex items-center gap-2 bg-arch-dark text-white text-[11px] font-sans uppercase tracking-widest px-7 py-3.5 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:gap-3 transition-all duration-300 group"
        >
          <span>Continue</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </div>
  );
}

/* ── Step 3: Personal details + message ── */
function Step3({
  selected,
  setSelected,
  onBack,
  onSubmit,
}: {
  selected: ReturnType<typeof useState<typeof selected>>[0];
  setSelected: (v: typeof selected) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const sel = selected as { name: string; email: string; phone: string; message: string };
  const inputBase =
    "w-full bg-white/60 border border-arch-stone/50 rounded-xl px-5 py-3.5 text-[13px] font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors duration-300";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="block text-[10px] font-sans uppercase tracking-[0.25em] text-text-muted mb-5">
          05 — Your Details
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[10px] font-sans uppercase tracking-widest text-text-muted mb-2">Full Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={sel.name}
              onChange={(e) => setSelected({ ...selected, name: e.target.value })}
              className={inputBase}
            />
          </div>
          <div>
            <label className="block text-[10px] font-sans uppercase tracking-widest text-text-muted mb-2">Email Address</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={sel.email}
              onChange={(e) => setSelected({ ...selected, email: e.target.value })}
              className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[10px] font-sans uppercase tracking-widest text-text-muted mb-2">Phone (Optional)</label>
          <input
            type="tel"
            placeholder="+91 9800000000"
            value={sel.phone}
            onChange={(e) => setSelected({ ...selected, phone: e.target.value })}
            className={inputBase}
          />
        </div>

        <div>
          <label className="block text-[10px] font-sans uppercase tracking-widest text-text-muted mb-2">Tell us about your project</label>
          <textarea
            rows={5}
            placeholder="Share any references, inspirations, functional needs or key spaces you'd like us to focus on..."
            value={sel.message}
            onChange={(e) => setSelected({ ...selected, message: e.target.value })}
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="text-[11px] font-sans uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300 flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span>Back</span>
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-arch-dark text-white text-[11px] font-sans uppercase tracking-widest px-7 py-3.5 rounded-full hover:gap-3 transition-all duration-300 group"
        >
          <span>Send Enquiry</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </form>
  );
}
