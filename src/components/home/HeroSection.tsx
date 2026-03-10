import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-products.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      {/* Text */}
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Premium Organic Skincare
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-foreground"
        >
          Nature's
          <br />
          <span className="text-gradient-sage italic">Purest</span>
          <br />
          Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-10"
        >
          Clinically proven botanicals meet artisanal craftsmanship. Discover skincare that honors your skin and the earth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Link to="/shop" className="btn-primary-skincare">Explore Collection</Link>
          <Link to="/rituals" className="btn-outline-skincare">Our Rituals</Link>
        </motion.div>
      </div>

      {/* Product image with glassmorphism */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative"
      >
        <div className="glass-card rounded-3xl p-4 md:p-6">
          <img
            src={heroImg}
            alt="Premium organic skincare products on natural stone"
            className="w-full rounded-2xl object-cover aspect-[4/3]"
          />
        </div>
        {/* Floating badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 md:-left-8 glass-card rounded-2xl px-6 py-4"
        >
          <p className="font-display text-2xl text-sage-dark">98%</p>
          <p className="font-body text-xs text-muted-foreground">Organic Ingredients</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
