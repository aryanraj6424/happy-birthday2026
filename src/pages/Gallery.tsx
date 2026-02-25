import { motion } from "motion/react";
import { Upload, X, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useState, ChangeEvent } from "react";

export const Gallery = ({ onNext }: { onNext: () => void }) => {
  const [images, setImages] = useState<string[]>([
    "/pic1.jpg",
    "/pic2.jpg",
    "/pic3.jpg",
    "/pic4.jpg",
    "/pic5.jpg",
    "/pic6.jpg",
    "/pic7.jpg",
    "/pic8.jpg",
    "/pic9.jpg",
    "/pic10.jpg",
    "/pic11.jpg",
    
  ]);

  // const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (files) {
  //     Array.from(files).forEach((file: File) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setImages((prev) => [...prev, reader.result as string].slice(0, 8));
  //       };
  //       reader.readAsDataURL(file);
  //     });
  //   }
  // };

  // const removeImage = (index: number) => {
  //   setImages((prev) => prev.filter((_, i) => i !== index));
  // };

  return (
    <div className="max-w-5xl w-full py-12">
      <h2 className="font-romantic text-5xl text-romantic-rose text-center mb-4">Our Memories in Frames</h2>
      <p className="text-center text-slate-500 mb-12 font-script text-xl">A few of our favorite moments, and you can add more!</p>
      
      <div className="flex flex-col items-center gap-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 2 : -2 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: index * 0.1 
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 0,
                zIndex: 20,
                transition: { duration: 0.3 }
              }}
              className="relative aspect-square glass-card p-2 rounded-2xl shadow-lg group overflow-hidden cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Memory ${index}`} 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-romantic-rose/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage(index);
                }}
                className="absolute top-4 right-4 bg-white/90 p-1.5 rounded-full text-romantic-rose shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-romantic-rose hover:text-white"
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
          
          {images.length < 8 && (
            <motion.label 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="cursor-pointer group aspect-square"
            >
              <div className="h-full glass-card border-dashed border-2 border-romantic-peach flex flex-col items-center justify-center gap-2 group-hover:bg-white/60 transition-all rounded-2xl">
                <div className="bg-romantic-peach/20 p-3 rounded-full">
                  <Upload className="text-romantic-rose" size={24} />
                </div>
                <span className="text-xs font-bold text-romantic-rose uppercase">Add More</span>
              </div>
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                className="hidden" 
                onChange={handleUpload}
              />
            </motion.label>
          )}
        </div>

        {images.length >= 3 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="bg-romantic-rose text-white px-12 py-4 rounded-full font-bold text-xl shadow-lg flex items-center gap-2 mt-8"
          >
            One Last Thing <ChevronRight size={24} />
          </motion.button>
        )}
      </div>
    </div>
  );
};
