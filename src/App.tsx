/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { FloatingElements } from "./components/FloatingElements";
import { Loader } from "./components/Loader";
import { Layout } from "./components/Layout";
import { MusicPlayer } from "./components/MusicPlayer";
import { CursorGlow } from "./components/CursorGlow";

// Pages
import { Welcome } from "./pages/Welcome";
import { LoveMessage } from "./pages/LoveMessage";
import { Memories } from "./pages/Memories";
import { Reasons } from "./pages/Reasons";
import { SpecialWish } from "./pages/SpecialWish";
import { Gallery } from "./pages/Gallery";
import { Final } from "./pages/Final";

type Page = 'welcome' | 'message' | 'memories' | 'reasons' | 'wish' | 'gallery' | 'final';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('welcome');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div className="romantic-gradient min-h-screen relative overflow-x-hidden">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <CursorGlow />
          <FloatingElements />
          <MusicPlayer />
          
          <main className="relative z-10">
            <Layout pageKey={currentPage}>
              {currentPage === 'welcome' && <Welcome onNext={() => navigateTo('message')} />}
              {currentPage === 'message' && <LoveMessage onNext={() => navigateTo('memories')} />}
              {currentPage === 'memories' && <Memories onNext={() => navigateTo('reasons')} />}
              {currentPage === 'reasons' && <Reasons onNext={() => navigateTo('gallery')} />}
              {currentPage === 'gallery' && <Gallery onNext={() => navigateTo('wish')} />}
              {currentPage === 'wish' && <SpecialWish onNext={() => navigateTo('final')} />}
              {currentPage === 'final' && <Final onRestart={() => navigateTo('welcome')} />}
            </Layout>
          </main>

          {/* Footer Decoration */}
          <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 text-romantic-rose/30 font-script text-sm pointer-events-none">
            Made with love for you ❤️
          </footer>
        </>
      )}
    </div>
  );
}
