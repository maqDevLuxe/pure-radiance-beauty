import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxShapes = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -250]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -350]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Leaf shape */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full opacity-[0.04]"
        aria-hidden
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-sage">
          <path d="M100,10 Q150,50 180,100 Q150,180 100,190 Q50,180 20,100 Q50,50 100,10Z" />
        </svg>
      </motion.div>

      {/* Water drop */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] left-[3%] w-40 h-40 opacity-[0.05]"
        aria-hidden
      >
        <svg viewBox="0 0 100 140" className="w-full h-full fill-clay">
          <path d="M50,5 Q80,50 85,80 Q85,120 50,135 Q15,120 15,80 Q20,50 50,5Z" />
        </svg>
      </motion.div>

      {/* Circle */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[70%] right-[10%] w-32 h-32 rounded-full border border-sage/10"
        aria-hidden
      />
    </div>
  );
};

export default ParallaxShapes;
