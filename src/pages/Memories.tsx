import { motion } from "motion/react";
import { Calendar, MessageCircle, Heart, Star, ChevronRight } from "lucide-react";

const memories = [
  {
    id: 1,
    title: "The First Meet ",
    date: "A magical day",
    desc: "The moment the world stopped and I saw you for the first time.",
    icon: <Calendar className="text-romantic-rose" />,
  },
  {
    id: 2,
    title: "First Conversation",
    date: "Hours felt like seconds",
    desc: "When we realized we could talk about everything and nothing forever.",
    icon: <MessageCircle className="text-romantic-lavender" />,
  },
  {
    id: 3,
    title: "Special Moments",
    date: "Countless memories",
    desc: "Every laugh, every hug, and every 'I love you' in between.",
    icon: <Heart className="text-romantic-pink" />,
  },
  {
    id: 4,
    title: "Today & Forever",
    date: "Your Special Day",
    desc: "Building our future together, one beautiful day at a time.",
    icon: <Star className="text-yellow-400" />,
  },
];

export const Memories = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="max-w-4xl w-full py-12">
      <h2 className="font-romantic text-5xl text-romantic-rose text-center mb-16">Our Beautiful Journey</h2>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-romantic-peach/30 hidden md:block" />
        
        <div className="space-y-12">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center justify-between w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block w-5/12" />
              
              <div className="z-20 flex items-center justify-center bg-white w-12 h-12 rounded-full border-4 border-romantic-peach shadow-md">
                {memory.icon}
              </div>
              
              <div className="w-full md:w-5/12 glass-card p-6 rounded-2xl hover:shadow-2xl transition-shadow cursor-default">
                <span className="text-xs font-bold uppercase tracking-widest text-romantic-rose/60">
                  {memory.date}
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mt-1 mb-2">{memory.title}</h3>
                <p className="text-slate-600 font-script text-lg">{memory.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div className="mt-20 flex justify-center">
        <button
          onClick={onNext}
          className="bg-white/80 backdrop-blur-sm border border-romantic-peach text-romantic-rose px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-romantic-rose hover:text-white transition-all shadow-md"
        >
          Why I Love You <ChevronRight size={20} />
        </button>
      </motion.div>
    </div>
  );
};
