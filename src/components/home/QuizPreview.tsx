import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const questions = [
  { q: "How does your skin feel after cleansing?", options: ["Tight & dry", "Comfortable", "Oily", "Combination"] },
  { q: "What's your biggest skin concern?", options: ["Fine lines", "Dark spots", "Acne", "Dullness"] },
  { q: "How sensitive is your skin?", options: ["Very sensitive", "Moderate", "Not at all", "Unsure"] },
];

const QuizPreview = () => (
  <section className="section-padding bg-accent">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Personalized Care</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Find Your Skin Type</h2>
        <div className="divider-botanical" />
      </AnimatedSection>

      <AnimatedSection>
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="space-y-8">
            {questions.map((item, qi) => (
              <motion.div
                key={qi}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: qi * 0.2 }}
              >
                <p className="font-display text-lg mb-4 text-foreground">{item.q}</p>
                <div className="flex flex-wrap gap-3">
                  {item.options.map((opt) => (
                    <button
                      key={opt}
                      className="px-5 py-2.5 rounded-full border border-border font-body text-sm text-muted-foreground hover:bg-sage hover:text-primary-foreground hover:border-sage transition-all duration-300 magnetic-hover"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="btn-primary-skincare">Get Your Routine</button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default QuizPreview;
