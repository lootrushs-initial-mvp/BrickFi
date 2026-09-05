import React from 'react';
import { motion } from 'framer-motion';
import {
  GithubIcon,
  LinkedinIcon,
  CodeIcon,
  LayersIcon,
  ShieldIcon,
  CpuIcon,
  BlocksIcon,
  RefreshCwIcon,
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function About() {
  const steps = [
    {
      icon: LayersIcon,
      title: 'Property Tokenization',
      description:
        'Real estate assets are divided into digital tokens on RevoFi — each token represents partial ownership of the physical property.',
    },
    {
      icon: ShieldIcon,
      title: 'Smart Contracts',
      description:
        'Ownership rights, yield distributions, and transactions are secured through audited blockchain smart contracts.',
    },
    {
      icon: BlocksIcon,
      title: 'Fractional Ownership',
      description:
        'Invest in high-value properties with as little as one token. Diversify your portfolio across multiple assets.',
    },
    {
      icon: RefreshCwIcon,
      title: 'Automated Returns',
      description:
        'Rental income and property appreciation are automatically distributed to token holders — no middlemen required.',
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-20">
            <p className="font-display text-accent text-sm uppercase tracking-widest mb-4">
              About RevoFi
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-6 max-w-3xl mx-auto leading-tight">
              Where Real Estate Meets{' '}
              <span className="brick-gradient-text">DeFi</span>
            </h1>
            <p className="text-xl text-cream-400 max-w-2xl mx-auto leading-relaxed">
              RevoFi bridges the tangible world of real estate with the efficiency of
              decentralized finance — making property investment accessible, transparent,
              and liquid for everyone.
            </p>
          </div>

          <div className="mb-24">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-cream-100 mb-10 text-center">
              How RevoFi Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass-panel hover:border-accent/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-muted border border-accent/25 flex items-center justify-center mb-4">
                    <item.icon className="text-accent" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-cream-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-cream-100 mb-10 text-center">
              Technical Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl glass-panel"
              >
                <div className="flex items-center gap-3 mb-5">
                  <CodeIcon size={24} className="text-accent" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-cream-100">
                    Frontend Stack
                  </h3>
                </div>
                <ul className="space-y-2.5 text-cream-400">
                  <li>• React with TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                  <li>• React Router</li>
                  <li>• ES6+ JavaScript</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl glass-panel"
              >
                <div className="flex items-center gap-3 mb-5">
                  <CpuIcon size={24} className="text-secondary" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-cream-100">
                    Blockchain
                  </h3>
                </div>
                <ul className="space-y-2.5 text-cream-400">
                  <li>• Ethereum smart contracts</li>
                  <li>• Wagmi & Viem</li>
                  <li>• MetaMask & WalletConnect</li>
                  <li>• ERC-20 property tokens</li>
                  <li>• Decentralized documents</li>
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-cream-100 mb-6">
              About the Developer
            </h2>
            <p className="text-cream-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Full-stack developer focused on blockchain and DeFi. RevoFi is a vision
              for democratizing real estate investment — turning physical properties into
              liquid, on-chain financial assets.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => window.open('https://github.com', '_blank')}
                icon={<GithubIcon size={18} />}
              >
                GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://linkedin.com', '_blank')}
                icon={<LinkedinIcon size={18} />}
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
