import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Leaf, Ban } from "lucide-react";

const CrueltyFreeSection = () => (
  <section className="section-padding bg-foreground text-primary-foreground">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <div className="flex justify-center gap-6 mb-8">
          <Heart className="w-8 h-8 opacity-60" strokeWidth={1.2} />
          <Leaf className="w-8 h-8 opacity-60" strokeWidth={1.2} />
          <Ban className="w-8 h-8 opacity-60" strokeWidth={1.2} />
        </div>
        <h2 className="font-display text-3xl md:text-5xl mb-6">Our Cruelty-Free Promise</h2>
        <p className="font-body text-base md:text-lg opacity-70 leading-relaxed max-w-2xl mx-auto mb-8">
          We believe beauty should never come at the cost of another living being. Every product is 100% cruelty-free, 
          vegan, and created without animal testing at any stage — from ingredient sourcing to final formulation.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {["Leaping Bunny Certified", "Vegan Society Approved", "PETA Recognized"].map((badge) => (
            <span key={badge} className="px-6 py-3 rounded-full border border-primary-foreground/20 font-body text-xs tracking-widest uppercase opacity-70">
              {badge}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CrueltyFreeSection;
