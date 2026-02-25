import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export const SpecialWish = ({ onNext }: { onNext: () => void }) => {
  const [petals, setPetals] = useState<{ id: number; x: number; delay: number }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="text-center relative w-full max-w-4xl">
      {/* Falling Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-[80vh]">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: "100vh", 
              opacity: [0, 1, 1, 0],
              rotate: 360,
              x: `${petal.x + Math.sin(petal.id) * 10}vw`
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: petal.delay,
              ease: "linear"
            }}
            className="absolute text-2xl text-romantic-peach/40"
            style={{ left: `${petal.x}%` }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10"
      >
        <h2 className="font-romantic text-6xl md:text-8xl text-romantic-rose mb-8 drop-shadow-xl">
          You Are My Everything
        </h2>
        
        <div className="glass-card p-10 rounded-full inline-block mb-12 animate-pulse shadow-[0_0_50px_rgba(255,133,162,0.3)]">
          <span className="text-8xl">🕯️</span>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 text-2xl font-script text-slate-700 leading-relaxed">
          <p>
            "On this special day, my wish for you is that you always see yourself 
            the way I see you—beautiful, capable, and infinitely loved."
          </p>
          <p>
            "May your year be filled with as much joy as you bring into my life every single day."
          </p>
        </div>
      </motion.div>

      <motion.div className="mt-16 relative z-10">
        <button
          onClick={onNext}
          className="text-romantic-rose font-bold text-xl flex items-center gap-2 mx-auto hover:scale-110 transition-transform"
        >
          Our Gallery <ChevronRight size={24} />
        </button>
      </motion.div>
    </div>
  );
};
