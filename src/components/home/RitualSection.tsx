import AnimatedSection from "@/components/AnimatedSection";
import { Droplets, Sun, Moon, Sparkles } from "lucide-react";

const steps = [
  { icon: Droplets, step: "01", title: "Cleanse", desc: "Gentle botanical cleanser removes impurities while preserving natural moisture barrier.", time: "Morning & Evening" },
  { icon: Sun, step: "02", title: "Activate", desc: "Potent serum with vitamin C and hyaluronic acid for deep cellular renewal.", time: "Morning" },
  { icon: Sparkles, step: "03", title: "Nourish", desc: "Rich moisturizer with squalane and ceramides locks in hydration for 24 hours.", time: "Morning & Evening" },
  { icon: Moon, step: "04", title: "Restore", desc: "Overnight repair mask with retinol alternative and peptides for deep regeneration.", time: "Evening" },
];

const RitualSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Your Daily Ritual</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">The Skincare Ritual</h2>
        <div className="divider-botanical" />
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mt-6">
          A curated four-step ritual designed to transform your skin from the inside out.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <AnimatedSection key={s.step} delay={i * 0.12}>
            <div className="glass-card rounded-2xl p-8 magnetic-hover h-full relative overflow-hidden group">
              <span className="font-display text-6xl text-sage/10 absolute -top-2 -right-2">{s.step}</span>
              <s.icon className="w-8 h-8 text-sage mb-6" strokeWidth={1.2} />
              <h3 className="font-display text-xl mb-2 text-foreground">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <span className="font-body text-xs tracking-widest uppercase text-clay-dark">{s.time}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default RitualSection;
