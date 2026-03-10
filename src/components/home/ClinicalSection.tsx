import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const metrics = [
  { value: 94, label: "Skin Hydration Increase", suffix: "%" },
  { value: 89, label: "Reduction in Fine Lines", suffix: "%" },
  { value: 96, label: "Users Saw Visible Results", suffix: "%" },
  { value: 12, label: "Clinical Studies", suffix: "+" },
];

const ClinicalSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Proven Results</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Clinical Efficacy</h2>
        <div className="divider-botanical" />
      </AnimatedSection>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.12}>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <p className="font-display text-5xl md:text-6xl text-sage-dark">
                  {m.value}{m.suffix}
                </p>
              </motion.div>
              <p className="font-body text-sm text-muted-foreground mt-3">{m.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ClinicalSection;
