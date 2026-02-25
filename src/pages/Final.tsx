import { motion } from "motion/react";
import { RefreshCw, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export const Final = ({ onRestart }: { onRestart: () => void }) => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-8"
      >
        <Heart className="w-32 h-32 text-romantic-rose fill-romantic-rose mx-auto drop-shadow-[0_0_30px_rgba(255,77,109,0.5)]" />
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-romantic text-6xl md:text-8xl text-romantic-rose mb-6"
      >
        Forever With You
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-2xl md:text-3xl font-script text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed"
      >
        "Today, tomorrow, and every single day after that. 
        I love you more than words can ever say. Happy Birthday!"
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="bg-white/80 backdrop-blur-sm border-2 border-romantic-rose text-romantic-rose px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto shadow-md hover:bg-romantic-rose hover:text-white transition-all"
      >
        <RefreshCw size={20} /> Replay Surprise
      </motion.button>
    </div>
  );
};
