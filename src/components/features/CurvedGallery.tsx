import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import heroInterior from "@/assets/hero-interior.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryStaircase from "@/assets/gallery-staircase.jpg";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=640&q=80",
    alt: "Luxury living room",
    label: "Living Room",
  },
  {
    id: 2,
    src: galleryBedroom,
    alt: "Modern bedroom",
    label: "Bedroom",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=640&q=80",
    alt: "Contemporary lounge",
    label: "Lounge",
  },
  {
    id: 4,
    src: galleryKitchen,
    alt: "Minimal kitchen",
    label: "Kitchen",
  },
  {
    id: 5,
    src: heroInterior,
    alt: "Premium living space",
    label: "CRAFTED SPACES",
    isCenter: true,
  },
  {
    id: 6,
    src: galleryDining,
    alt: "Contemporary dining",
    label: "Dining",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1631048730814-57bee4855742?w=640&q=80",
    alt: "Luxury office",
    label: "Office",
  },
  {
    id: 8,
    src: galleryStaircase,
    alt: "Architectural staircase",
    label: "Staircase",
  },
  {
    id: 9,
    src: galleryBathroom,
    alt: "Premium bathroom",
    label: "Bathroom",
  },
];

// Rotation + translate offsets for the curved fan effect
// index 0-8, center is index 4
const cardTransforms = [
  { rotateY: 28, rotateZ: -6, translateX: -16, scale: 0.82 },
  { rotateY: 18, rotateZ: -3.5, translateX: -8, scale: 0.89 },
  { rotateY: 10, rotateZ: -2, translateX: -4, scale: 0.94 },
  { rotateY: 4, rotateZ: -0.8, translateX: -2, scale: 0.97 },
  { rotateY: 0, rotateZ: 0, translateX: 0, scale: 1 },
  { rotateY: -4, rotateZ: 0.8, translateX: 2, scale: 0.97 },
  { rotateY: -10, rotateZ: 2, translateX: 4, scale: 0.94 },
  { rotateY: -18, rotateZ: 3.5, translateX: 8, scale: 0.89 },
  { rotateY: -28, rotateZ: 6, translateX: 16, scale: 0.82 },
];

export default function CurvedGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={sectionRef} className="mt-14 md:mt-18 relative">
      {/* Desktop curved gallery */}
      <div className="hidden md:block gallery-mask overflow-hidden px-0 py-8">
        <motion.div
          style={{ y: parallaxY }}
          className="flex items-center justify-center gap-3 lg:gap-4 px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {galleryItems.map((item, i) => {
            const tf = cardTransforms[i];
            return (
              <motion.div
                key={item.id}
                className="relative flex-shrink-0 overflow-hidden rounded-[12px] cursor-pointer group"
                style={{
                  width: item.isCenter ? "clamp(200px, 18vw, 280px)" : "clamp(140px, 12vw, 200px)",
                  height: item.isCenter ? "clamp(250px, 22vw, 340px)" : "clamp(180px, 15vw, 240px)",
                  transform: `perspective(1200px) rotateY(${tf.rotateY}deg) rotateZ(${tf.rotateZ}deg) translateX(${tf.translateX}px) scale(${tf.scale})`,
                  transformOrigin: i < 4 ? "right center" : i > 4 ? "left center" : "center center",
                  zIndex: item.isCenter ? 10 : Math.abs(4 - i) < 2 ? 8 : 5,
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: tf.scale * 1.03, transition: { duration: 0.4 } }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Center label */}
                {item.isCenter && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-white text-[13px] font-light tracking-[0.3em] uppercase opacity-90">
                      {item.label}
                    </span>
                  </div>
                )}

                {/* Bottom label for non-center */}
                {!item.isCenter && (
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-[9px] font-sans uppercase tracking-widest">{item.label}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile swipeable gallery */}
      <div className="md:hidden mt-4 relative">
        <div
          ref={mobileScrollRef}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar px-6 pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 overflow-hidden rounded-[12px]"
              style={{
                width: "65vw",
                height: "85vw",
                scrollSnapAlign: "center",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {item.isCenter && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-white text-[12px] tracking-[0.25em] uppercase">{item.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Scroll hint */}
        <p className="text-center text-text-muted text-[10px] font-sans uppercase tracking-widest mt-1">
          Swipe to explore
        </p>
      </div>
    </section>
  );
}
