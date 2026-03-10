import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import ritualImg from "@/assets/ritual-hero.jpg";
import { Droplets, Sun, Sparkles, Moon, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const morningSteps = [
  { icon: Droplets, step: "01", title: "Cleanse", time: "60 seconds", desc: "Apply a small amount of Botanical Cleanser to damp skin. Massage in circular motions, focusing on T-zone. Rinse with lukewarm water." },
  { icon: Sun, step: "02", title: "Activate with Serum", time: "30 seconds", desc: "Press 3-4 drops of Radiance Serum into slightly damp skin. Start from the center of your face and work outward." },
  { icon: Sparkles, step: "03", title: "Moisturize", time: "45 seconds", desc: "Warm a pea-sized amount of Hydra Moisturizer between fingertips. Press into skin using gentle upward motions." },
];

const eveningSteps = [
  { icon: Droplets, step: "01", title: "Double Cleanse", time: "2 minutes", desc: "First, dissolve makeup with Face Oil Elixir. Follow with Botanical Cleanser for a deep, thorough cleanse." },
  { icon: Heart, step: "02", title: "Treat & Target", time: "60 seconds", desc: "Apply Eye Renewal Cream with ring finger using gentle tapping motions. Follow with a thin layer of Exfoliating Treatment (2x weekly)." },
  { icon: Moon, step: "03", title: "Restore Overnight", time: "45 seconds", desc: "Apply a generous layer of Overnight Repair Mask. Let the bakuchiol and peptides work while you sleep." },
];

const RitualsPage = () => (
  <div className="relative overflow-hidden">
    <CustomCursor />
    <Navbar />
    <main className="relative z-10 pt-28">
      <section className="section-padding pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Daily Practice</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-display text-4xl md:text-6xl text-foreground mb-6">The Skincare Rituals</motion.h1>
          <div className="divider-botanical" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-body text-base text-muted-foreground max-w-xl mx-auto mt-6">
            Transform your skincare routine into a mindful ritual. Each step is designed to nourish both your skin and your spirit.
          </motion.p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <AnimatedSection>
          <img src={ritualImg} alt="Skincare ritual" className="w-full rounded-3xl object-cover max-h-[500px]" />
        </AnimatedSection>
      </section>

      {/* Morning Ritual */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sun className="w-5 h-5 text-clay" strokeWidth={1.5} />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-clay-dark">Morning Ritual</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Awaken & Protect</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Clock className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
              <span className="font-body text-sm text-muted-foreground">Total time: ~3 minutes</span>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {morningSteps.map((s, i) => (
              <AnimatedSection key={s.step + "m"} delay={i * 0.12}>
                <div className="glass-card rounded-2xl p-8 magnetic-hover">
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-full bg-clay-light flex items-center justify-center">
                        <s.icon className="w-6 h-6 text-clay-dark" strokeWidth={1.2} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-sm text-clay-dark">{s.step}</span>
                        <h3 className="font-display text-xl text-foreground">{s.title}</h3>
                        <span className="font-body text-xs text-muted-foreground ml-auto">{s.time}</span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Evening Ritual */}
      <section className="section-padding bg-accent">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Moon className="w-5 h-5 text-sage" strokeWidth={1.5} />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-sage-dark">Evening Ritual</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Restore & Renew</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Clock className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
              <span className="font-body text-sm text-muted-foreground">Total time: ~4 minutes</span>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {eveningSteps.map((s, i) => (
              <AnimatedSection key={s.step + "e"} delay={i * 0.12}>
                <div className="glass-card rounded-2xl p-8 magnetic-hover">
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center">
                        <s.icon className="w-6 h-6 text-sage-dark" strokeWidth={1.2} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-sm text-sage-dark">{s.step}</span>
                        <h3 className="font-display text-xl text-foreground">{s.title}</h3>
                        <span className="font-body text-xs text-muted-foreground ml-auto">{s.time}</span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link to="/shop" className="btn-primary-skincare">Shop The Ritual Set</Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default RitualsPage;
