import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const counters = [
  { target: 50000, label: "Happy Customers", suffix: "+" },
  { target: 98, label: "Natural Ingredients", suffix: "%" },
  { target: 15, label: "Award Winning Products", suffix: "" },
  { target: 200, label: "Botanical Extracts", suffix: "+" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const start = Date.now();
    const step = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl text-sage-dark">
        {target >= 1000 ? (count / 1000).toFixed(count >= target ? 0 : 0) + "K" : count}{suffix}
      </p>
    </div>
  );
};

const GlowingCounters = () => (
  <section className="section-padding bg-sage-light/50">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-5xl text-foreground">Glowing Results</h2>
        <div className="divider-botanical" />
      </AnimatedSection>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {counters.map((c) => (
          <div key={c.label} className="text-center">
            <Counter target={c.target} suffix={c.suffix} />
            <p className="font-body text-sm text-muted-foreground mt-2">{c.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GlowingCounters;
