import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface FloatingItem {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'heart' | 'flower' | 'sparkle';
}

export const FloatingElements = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const newItems: FloatingItem[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (30 - 10) + 10,
      duration: Math.random() * (15 - 10) + 10,
      delay: Math.random() * 5,
      type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'flower' : 'sparkle',
    }));
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
            x: `${item.x + Math.sin(item.id) * 5}vw`,
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{ left: `${item.x}vw` }}
        >
          {item.type === 'heart' && (
            <span className="text-romantic-pink" style={{ fontSize: item.size }}>❤️</span>
          )}
          {item.type === 'flower' && (
            <span className="text-romantic-peach" style={{ fontSize: item.size }}>🌸</span>
          )}
          {item.type === 'sparkle' && (
            <span className="text-yellow-300" style={{ fontSize: item.size }}>✨</span>
          )}
        </motion.div>
      ))}
    </div>
  );
};
