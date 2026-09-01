import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/features/Hero";
import CurvedGallery from "@/components/features/CurvedGallery";
import FeatureColumns from "@/components/features/FeatureColumns";
import ApproachSection from "@/components/features/ApproachSection";
import ProjectGrid from "@/components/features/ProjectGrid";
import PressStrip from "@/components/features/PressStrip";
import FooterSection from "@/components/features/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CurvedGallery />
        <FeatureColumns />
        <ApproachSection />
        <ProjectGrid />
      </main>
      <PressStrip />
      <FooterSection />
    </div>
  );
}
