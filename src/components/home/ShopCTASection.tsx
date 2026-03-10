import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const ShopCTASection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Begin Your Journey</p>
        <h2 className="font-display text-3xl md:text-6xl text-foreground mb-6">
          Shop Your Complete
          <br />
          <span className="text-gradient-sage italic">Skincare Routine</span>
        </h2>
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
          Curated sets designed for every skin type. Each routine includes our four signature products 
          with a complimentary skin consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/shop" className="btn-primary-skincare">Shop The Collection</Link>
          <Link to="/rituals" className="btn-outline-skincare">Discover Rituals</Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ShopCTASection;
