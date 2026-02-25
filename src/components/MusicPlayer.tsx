// import { useState, useEffect } from "react";
// import { Music, Music2 } from "lucide-react";

// export const MusicPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audio] = useState(new Audio("https://www.mboxdrive.com/happy-birthday-to-you-piano-133657.mp3")); // Placeholder romantic-ish track

//   useEffect(() => {
//     audio.loop = true;
//     return () => {
//       audio.pause();
//     };
//   }, [audio]);

//   const toggleMusic = () => {
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play().catch(e => console.log("Audio play blocked by browser", e));
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <button
//       onClick={toggleMusic}
//       className="fixed bottom-8 right-8 z-40 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg text-romantic-rose hover:scale-110 transition-transform"
//     >
//       {isPlaying ? <Music size={24} className="animate-pulse" /> : <Music2 size={24} />}
//     </button>
//   );
// };


import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export const MusicPlayer = ({ autoPlay }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // useRef se audio object banate hain taki renders ke beech ye change na ho
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Audio initialize kar rahe hain
    const audio = new Audio("/birthday-song.mp3");
    audio.loop = true;
    audio.volume = 0.7; // Thodi soft volume (0.7 = 70%)
    audioRef.current = audio;

    // Component band hone par music pause karne ke liye cleanup
    return () => {
      audio.pause();
    };
  }, []);

  // Jaise hi App.tsx se 'autoPlay' signal milta hai
  useEffect(() => {
    if (autoPlay && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Autoplay was blocked, waiting for more interaction", err);
        });
    }
  }, [autoPlay]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Playback error:", err));
    }
  };

  return (
    <button
      onClick={toggleMusic}
      // Romantic rose/pink design colors
      className="fixed bottom-8 right-8 z-50 bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl text-pink-500 hover:scale-110 transition-all active:scale-95 border border-pink-100"
    >
      {isPlaying ? (
        <Music size={24} className="animate-pulse" />
      ) : (
        <Music2 size={24} className="opacity-60" />
      )}
    </button>
  );
};
