import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import shopImg from "@/assets/shop-products.jpg";

const products = [
  { name: "Botanical Cleanser", price: "$48", category: "Cleanse", desc: "Gentle foaming cleanser with chamomile and green tea" },
  { name: "Radiance Serum", price: "$78", category: "Activate", desc: "Vitamin C and hyaluronic acid brightening serum" },
  { name: "Hydra Moisturizer", price: "$62", category: "Nourish", desc: "Deep hydration with squalane and ceramides" },
  { name: "Overnight Repair Mask", price: "$85", category: "Restore", desc: "Bakuchiol and peptide night treatment" },
  { name: "Eye Renewal Cream", price: "$56", category: "Target", desc: "Caffeine and rosehip oil for dark circles" },
  { name: "Exfoliating Treatment", price: "$52", category: "Renew", desc: "Gentle AHA/BHA with willow bark extract" },
  { name: "Face Oil Elixir", price: "$72", category: "Nourish", desc: "Cold-pressed rosehip and jojoba blend" },
  { name: "Clay Detox Mask", price: "$45", category: "Purify", desc: "Kaolin clay with activated charcoal" },
];

const ShopPage = () => (
  <div className="relative overflow-hidden">
    <CustomCursor />
    <Navbar />
    <main className="relative z-10 pt-28">
      {/* Hero */}
      <section className="section-padding pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">The Collection</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-display text-4xl md:text-6xl text-foreground mb-6">Shop Pure Radiance</motion.h1>
          <div className="divider-botanical" />
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 md:px-12 lg:px-24 mb-16">
        <AnimatedSection>
          <img src={shopImg} alt="Pure Radiance product collection" className="w-full rounded-3xl object-cover max-h-[500px]" />
        </AnimatedSection>
      </section>

      {/* Products Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div className="glass-card rounded-2xl overflow-hidden magnetic-hover h-full group">
                  <div className="h-52 bg-sage-light/40 flex items-center justify-center">
                    <span className="font-display text-4xl text-sage/20 italic">{p.category}</span>
                  </div>
                  <div className="p-6">
                    <span className="font-body text-xs tracking-widest uppercase text-clay-dark">{p.category}</span>
                    <h3 className="font-display text-lg text-foreground mt-2 mb-1">{p.name}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-sage-dark">{p.price}</span>
                      <button className="btn-primary-skincare text-xs px-5 py-2">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ShopPage;
