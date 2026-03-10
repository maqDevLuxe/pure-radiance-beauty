import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";

const transformations = [
  { name: "Sarah M.", age: "34", duration: "8 weeks", result: "Visible reduction in fine lines around eyes and forehead. Skin feels plumper and more hydrated than ever.", rating: 5 },
  { name: "Elena K.", age: "28", duration: "6 weeks", result: "My acne scars have noticeably faded. Complexion is brighter and more even-toned. I finally feel confident bare-faced.", rating: 5 },
  { name: "Priya S.", age: "42", duration: "12 weeks", result: "The overnight repair mask is incredible. My skin looks 5 years younger. Even my dermatologist noticed the difference.", rating: 5 },
];

const TransformationsSection = () => (
  <section className="section-padding bg-accent">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Real Results</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Customer Transformations</h2>
        <div className="divider-botanical" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {transformations.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.12}>
            <div className="glass-card rounded-2xl p-8 magnetic-hover h-full">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-clay text-clay" />
                ))}
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed mb-6 italic">"{t.result}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-base text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">Age {t.age} · {t.duration} using Pure Radiance</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TransformationsSection;
