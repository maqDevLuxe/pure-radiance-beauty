import AnimatedSection from "@/components/AnimatedSection";
import { Leaf, Flower2, Cherry, Citrus } from "lucide-react";

const ingredients = [
  { icon: Leaf, name: "Bakuchiol", origin: "India", benefit: "Natural retinol alternative that smooths fine lines without irritation" },
  { icon: Flower2, name: "Chamomile Extract", origin: "Egypt", benefit: "Calms inflammation and reduces redness for sensitive skin types" },
  { icon: Cherry, name: "Rosehip Seed Oil", origin: "Chile", benefit: "Rich in vitamins A & C to brighten and even skin tone" },
  { icon: Citrus, name: "Yuzu Extract", origin: "Japan", benefit: "Potent antioxidant that protects against environmental stressors" },
  { icon: Leaf, name: "Green Tea Polyphenols", origin: "Japan", benefit: "Powerful free radical scavenger that prevents premature aging" },
  { icon: Flower2, name: "Squalane", origin: "Olive-derived", benefit: "Mimics skin's natural sebum for deep, non-greasy hydration" },
];

const IngredientsGrid = () => (
  <section className="section-padding bg-accent">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Botanical Science</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Active Botanical Ingredients</h2>
        <div className="divider-botanical" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredients.map((ing, i) => (
          <AnimatedSection key={ing.name} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-8 magnetic-hover h-full group">
              <div className="flex items-center gap-3 mb-4">
                <ing.icon className="w-6 h-6 text-sage" strokeWidth={1.2} />
                <span className="font-body text-xs tracking-widest uppercase text-clay-dark">{ing.origin}</span>
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{ing.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{ing.benefit}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default IngredientsGrid;
