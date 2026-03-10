import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        const match = bg.match(/\d+/g);
        if (match) {
          const [r, g, b] = match.map(Number);
          setIsDark((r * 299 + g * 587 + b * 114) / 1000 < 128);
        }
        setIsHovering(
          el.tagName === "A" ||
          el.tagName === "BUTTON" ||
          el.closest("a") !== null ||
          el.closest("button") !== null
        );
      }
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        animate={{
          x: pos.x - (isHovering ? 24 : 10),
          y: pos.y - (isHovering ? 24 : 10),
          width: isHovering ? 48 : 20,
          height: isHovering ? 48 : 20,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          backgroundColor: isDark ? "hsl(40, 20%, 97%)" : "hsl(140, 14%, 35%)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          opacity: visible ? 0.3 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          width: 40,
          height: 40,
          borderColor: isDark ? "hsl(40, 20%, 97%)" : "hsl(140, 14%, 35%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
