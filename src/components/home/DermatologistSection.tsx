import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Award, Star } from "lucide-react";

const approvals = [
  { icon: Shield, title: "Dermatologist Tested", desc: "Rigorously tested and approved by board-certified dermatologists" },
  { icon: Award, title: "ECOCERT Certified", desc: "Meeting the highest standards of organic and natural cosmetics" },
  { icon: Star, title: "Clean Beauty Award", desc: "Recognized for transparency, sustainability and efficacy" },
];

const DermatologistSection = () => (
  <section className="section-padding bg-accent">
    <div className="max-w-6xl mx-auto text-center">
      <AnimatedSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Trusted by Experts</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Dermatologist Approved</h2>
        <div className="divider-botanical" />
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {approvals.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.15}>
            <div className="glass-card rounded-2xl p-8 magnetic-hover text-center">
              <item.icon className="w-10 h-10 text-sage mx-auto mb-6" strokeWidth={1.2} />
              <h3 className="font-display text-xl mb-3 text-foreground">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DermatologistSection;
