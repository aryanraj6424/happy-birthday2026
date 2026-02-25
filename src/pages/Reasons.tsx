import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import confetti from "canvas-confetti";

const reasons = [
  { id: 1, text: "Your beautiful smile that lights up my entire world." },
  { id: 2, text: "The way you care for everyone around you so selflessly." },
  { id: 3, text: "How you make me feel like the luckiest person alive." },
  { id: 4, text: "Your laugh, which is my favorite melody in the world." },
  { id: 5, text: "The way you support my dreams and believe in me." },
  { id: 6, text: "Simply because you are YOU, and that's more than enough." },
];

export const Reasons = ({ onNext }: { onNext: () => void }) => {
  const handleCardClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff85a2", "#ff4d6d", "#ffb5a7"],
    });
  };

  return (
    <div className="max-w-5xl w-full py-12">
      <h2 className="font-romantic text-5xl text-romantic-rose text-center mb-12">Reasons I Love You</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={handleCardClick}
            className="perspective-1000 group cursor-pointer h-48"
          >
            <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 flex items-center justify-center glass-card rounded-2xl backface-hidden">
                <span className="text-4xl text-romantic-rose">❤️</span>
              </div>
              
              {/* Back */}
              <div className="absolute inset-0 flex items-center justify-center bg-romantic-rose text-white p-6 rounded-2xl [transform:rotateY(180deg)] backface-hidden text-center">
                <p className="font-script text-xl leading-relaxed">{reason.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-16 flex justify-center">
        <button
          onClick={onNext}
          className="bg-romantic-rose text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-romantic-pink transition-all flex items-center gap-2"
        >
          A Special Wish <ChevronRight size={24} />
        </button>
      </motion.div>
    </div>
  );
};
