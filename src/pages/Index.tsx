import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ParallaxShapes from "@/components/ParallaxShapes";
import HeroSection from "@/components/home/HeroSection";
import DermatologistSection from "@/components/home/DermatologistSection";
import RitualSection from "@/components/home/RitualSection";
import IngredientsGrid from "@/components/home/IngredientsGrid";
import ClinicalSection from "@/components/home/ClinicalSection";
import QuizPreview from "@/components/home/QuizPreview";
import EthicalSection from "@/components/home/EthicalSection";
import FullWidthImage from "@/components/home/FullWidthImage";
import GlowingCounters from "@/components/home/GlowingCounters";
import BlogSection from "@/components/home/BlogSection";
import CrueltyFreeSection from "@/components/home/CrueltyFreeSection";
import TransformationsSection from "@/components/home/TransformationsSection";
import ShopCTASection from "@/components/home/ShopCTASection";

const Index = () => (
  <div className="relative overflow-hidden">
    <CustomCursor />
    <ParallaxShapes />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <DermatologistSection />
      <RitualSection />
      <IngredientsGrid />
      <ClinicalSection />
      <QuizPreview />
      <EthicalSection />
      <FullWidthImage />
      <GlowingCounters />
      <BlogSection />
      <CrueltyFreeSection />
      <TransformationsSection />
      <ShopCTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
