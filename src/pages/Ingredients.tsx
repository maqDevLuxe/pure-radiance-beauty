import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import ingredientsImg from "@/assets/ingredients-hero.jpg";
import { Leaf, Flower2, Droplets, Sun } from "lucide-react";

const ingredientsList = [
  { icon: Leaf, name: "Bakuchiol", origin: "India", desc: "A plant-based retinol alternative derived from the babchi plant. Stimulates collagen production and cell turnover without the irritation of synthetic retinol.", potency: "99.7% Pure" },
  { icon: Flower2, name: "Chamomile Extract", origin: "Egypt", desc: "Rich in bisabolol and apigenin, this ancient botanical calms inflammation, reduces redness, and supports the skin's natural healing processes.", potency: "Organic Grade A" },
  { icon: Droplets, name: "Hyaluronic Acid", origin: "Bio-fermented", desc: "Multi-molecular weight hyaluronic acid penetrates three layers of skin for deep, lasting hydration that plumps and smooths.", potency: "Triple Molecular" },
  { icon: Sun, name: "Vitamin C Complex", origin: "Kakadu Plum", desc: "The world's richest natural source of vitamin C. Brightens, protects against UV damage, and stimulates collagen synthesis.", potency: "55x Oranges" },
  { icon: Leaf, name: "Squalane", origin: "Olive-derived", desc: "Biomimetic lipid identical to your skin's natural sebum. Delivers weightless hydration and strengthens the moisture barrier.", potency: "Plant-based" },
  { icon: Flower2, name: "Rosehip Seed Oil", origin: "Chile", desc: "Cold-pressed oil rich in essential fatty acids, vitamin A, and lycopene. Repairs, brightens, and evens skin tone naturally.", potency: "Cold-pressed" },
];

const IngredientsPage = () => (
  <div className="relative overflow-hidden">
    <CustomCursor />
    <Navbar />
    <main className="relative z-10 pt-28">
      <section className="section-padding pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Botanical Science</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-display text-4xl md:text-6xl text-foreground mb-6">Our Ingredients</motion.h1>
          <div className="divider-botanical" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-body text-base text-muted-foreground max-w-xl mx-auto mt-6">
            Every ingredient is selected for its proven efficacy, purity, and sustainability. No fillers, no synthetics, no compromises.
          </motion.p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-16">
        <AnimatedSection>
          <img src={ingredientsImg} alt="Natural botanical ingredients" className="w-full rounded-3xl object-cover max-h-[500px]" />
        </AnimatedSection>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto space-y-8">
          {ingredientsList.map((ing, i) => (
            <AnimatedSection key={ing.name} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 md:p-10 magnetic-hover">
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                  <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center">
                    <ing.icon className="w-7 h-7 text-sage-dark" strokeWidth={1.2} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display text-xl text-foreground">{ing.name}</h3>
                      <span className="font-body text-xs tracking-widest uppercase text-clay-dark">{ing.origin}</span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{ing.desc}</p>
                  </div>
                  <span className="font-body text-xs tracking-widest uppercase text-sage-dark bg-sage-light px-4 py-2 rounded-full self-start">{ing.potency}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default IngredientsPage;
