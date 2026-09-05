import React from 'react';
import { motion } from 'framer-motion';

function RevoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="9" height="4" rx="1" fill="currentColor" className="text-accent" />
      <rect x="13" y="4" width="9" height="4" rx="1" fill="currentColor" className="text-accent" opacity="0.75" />
      <rect x="2" y="10" width="11" height="4" rx="1" fill="currentColor" className="text-accent" opacity="0.9" />
      <rect x="15" y="10" width="7" height="4" rx="1" fill="currentColor" className="text-secondary" />
      <rect x="2" y="16" width="7" height="4" rx="1" fill="currentColor" className="text-secondary" opacity="0.85" />
      <rect x="11" y="16" width="11" height="4" rx="1" fill="currentColor" className="text-accent" opacity="0.65" />
    </svg>
  );
}

export function Logo({ size = 'default' }: { size?: 'default' | 'large' }) {
  const isLarge = size === 'large';

  return (
    <motion.div
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-secondary/10 border border-accent/25 shadow-glow-sm ${
          isLarge ? 'w-14 h-14' : 'w-10 h-10'
        }`}
      >
        <RevoIcon />
      </div>
      <span
        className={`font-display font-bold tracking-tight text-cream-100 ${
          isLarge ? 'text-3xl' : 'text-xl'
        }`}
      >
        Revo<span className="text-accent">Fi</span>
      </span>
    </motion.div>
  );
}
