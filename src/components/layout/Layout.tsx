import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';

export function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-void-950 text-cream-100 flex flex-col relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-secondary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/[0.015] rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-brick-pattern opacity-40" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.025\'/%3E%3C/svg%3E')] opacity-40" />
      </div>

      <Navbar />
      <motion.main
        className="flex-grow relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
