import botanicalImg from "@/assets/botanical-spa.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FullWidthImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.img
        src={botanicalImg}
        alt="Botanical spa ingredients flat lay"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(40,20%,97%,0.3), hsla(40,20%,97%,0.6))" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-4xl md:text-6xl text-foreground">
            Where Nature
            <br />
            <span className="italic text-sage-dark">Meets Science</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FullWidthImage;
