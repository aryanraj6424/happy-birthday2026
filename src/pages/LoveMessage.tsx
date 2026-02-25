import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export const LoveMessage = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="max-w-2xl w-full">
      <motion.div
        initial={{ rotate: -2, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <span className="text-6xl">🌹</span>
        </div>
        <div className="absolute bottom-0 left-0 p-4 opacity-20">
          <span className="text-6xl">🌹</span>
        </div>

        <h2 className="font-romantic text-4xl text-romantic-rose mb-8 text-center">To My Dearest Akshu...</h2>
        
        <div className="space-y-6 text-lg md:text-xl font-script text-slate-700 leading-loose">
          <p>
            Happy Birthday to the one who makes my heart skip a beat. 
            Words could never truly express the depth of my love for you, 
            but I'll spend the rest of my life trying.
          </p>
          <p>
            You are my sunshine on cloudy days, my peace in the middle of chaos, 
            and my home wherever we are. Your smile is my favorite sight, 
            and your happiness is my greatest mission.
          </p>
          <p>
            Today is a celebration of the beautiful soul you are. 
            I am so incredibly lucky to walk through life by your side.
          </p>
        </div>

        <motion.div className="mt-12 flex justify-center">
          <button
            onClick={onNext}
            className="text-romantic-rose font-bold flex items-center gap-1 hover:gap-3 transition-all"
          >
            Continue the journey <ChevronRight size={20} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
