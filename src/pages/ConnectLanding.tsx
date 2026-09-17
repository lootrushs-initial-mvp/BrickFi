import React from 'react';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Building2, Coins, Shield, Layers } from 'lucide-react';
import { Logo } from '../components/ui/Logo';

const features = [
  { icon: Building2, label: 'Tokenized Properties', color: 'text-accent' },
  { icon: Coins, label: 'Fractional Ownership', color: 'text-secondary' },
  { icon: Shield, label: 'On-Chain Security', color: 'text-accent' },
  { icon: Layers, label: 'DeFi Liquidity', color: 'text-secondary' },
];

/**
 * Shown as the only screen until a wallet is connected.
 */
export default function ConnectLanding() {
  return (
    <div className="min-h-screen bg-void-950 text-cream-100 flex flex-col relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-accent/[0.06] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-secondary/[0.05] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-brick-pattern opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-lg w-full"
        >
          <div className="mb-10">
            <Logo size="large" />
          </div>

          <p className="font-display text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-5">
            Tokenized Real Estate · On-Chain
          </p>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-100 mb-5 leading-tight text-balance">
            Build wealth,{' '}
            <span className="brick-gradient-text">token by token</span>
          </h1>

          <p className="text-cream-400 text-lg mb-10 leading-relaxed max-w-md">
            Connect your wallet to explore premium properties, invest in fractional
            tokens, and grow your real estate portfolio on the blockchain.
          </p>

          <div className="w-full flex justify-center mb-12 [&_button]:!bg-accent [&_button]:!text-cream-50 [&_button]:!rounded-xl [&_button]:!min-h-[54px] [&_button]:!px-10 [&_button]:!text-base [&_button]:!font-semibold [&_button]:!shadow-glow-sm [&_button:hover]:!bg-accent-light">
            <ConnectButton />
          </div>

          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl glass-panel text-left"
              >
                <feature.icon size={18} className={feature.color} strokeWidth={1.75} />
                <span className="text-cream-300 text-xs font-medium leading-tight">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
