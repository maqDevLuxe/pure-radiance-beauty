import AnimatedSection from "@/components/AnimatedSection";
import { Globe, Recycle, Heart } from "lucide-react";

const pillars = [
  { icon: Globe, title: "Fair Trade Sourced", desc: "Every ingredient is ethically sourced from small-scale farmers and cooperatives across 12 countries." },
  { icon: Recycle, title: "Zero-Waste Packaging", desc: "Glass containers, biodegradable labels, and compostable shipping materials. Carbon-neutral delivery." },
  { icon: Heart, title: "Community Impact", desc: "5% of every purchase supports women-led farming cooperatives in developing regions." },
];

const EthicalSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Promise</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Ethical Sourcing</h2>
          <div className="divider-botanical !mx-0" />
          <p className="font-body text-base text-muted-foreground leading-relaxed mt-6 mb-10">
            From seed to bottle, every step in our supply chain is guided by respect — for the earth, for communities, and for your skin.
          </p>
          <div className="space-y-6">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-sage-dark" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="bg-sage-light rounded-3xl aspect-square flex items-center justify-center">
            <div className="text-center px-8">
              <p className="font-display text-6xl text-sage-dark mb-4">12</p>
              <p className="font-body text-sm text-muted-foreground">Countries of origin for our botanical ingredients</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default EthicalSection;
