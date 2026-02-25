import { motion } from "motion/react";
import { Heart } from "lucide-react";

export const Welcome = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="text-center">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-romantic text-5xl md:text-7xl text-romantic-rose mb-6 drop-shadow-lg"
      >
        Happy Birthday Akshu ❤️
      </motion.h1>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="max-w-md mx-auto mb-12"
      >
        <p className="text-xl md:text-2xl font-script text-slate-600 leading-relaxed">
          "Every moment with you is a gift, but today is the most special of all. 
          I've prepared a little something to show you how much you mean to me."
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 133, 162, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="bg-romantic-rose text-white px-8 py-4 rounded-full font-bold text-xl flex items-center gap-2 mx-auto shadow-lg transition-all"
      >
        Open Your Surprise <Heart className="fill-current" size={24} />
      </motion.button>
    </div>
  );
};
