import { motion, AnimatePresence } from "motion/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  pageKey: string;
}

export const Layout = ({ children, pageKey }: LayoutProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 relative z-10"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
