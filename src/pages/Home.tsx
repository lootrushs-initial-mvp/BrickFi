import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ArrowRightIcon, BuildingIcon, CoinsIcon, ShieldIcon, BlocksIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PropertyCard } from '../components/ui/PropertyCard';
import { properties } from '../utils/mockData';

const stats = [
  { value: '$48M+', label: 'Assets Tokenized' },
  { value: '2,400+', label: 'Investors' },
  { value: '12.4%', label: 'Avg. APY' },
];

export default function Home() {
  const featuredProperties = properties.slice(0, 3);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void-950/50 via-void-950/85 to-void-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-void-950/80 via-transparent to-void-950/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-muted border border-accent/25 mb-8">
              <BlocksIcon size={16} className="text-accent" />
              <span className="font-display text-accent font-semibold text-xs uppercase tracking-widest">
                RevoFi · Real Estate Meets DeFi
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-100 leading-[1.08] tracking-tight mb-6">
              Own premium property
              <br />
              <span className="brick-gradient-text">one token at a time</span>
            </h1>

            <p className="text-lg sm:text-xl text-cream-300 max-w-xl mb-10 leading-relaxed">
              RevoFi tokenizes real estate into on-chain tokens. Invest from as little
              as one token — earn rental yields, track ownership transparently, and
              trade fractions with DeFi liquidity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" onClick={() => navigate('/browse')} icon={<ArrowRightIcon size={20} />}>
                Explore Properties
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/about')}>
                How RevoFi Works
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-left"
                >
                  <p className="font-display text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-cream-400 text-xs sm:text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
            <div>
              <p className="font-display text-secondary text-sm uppercase tracking-widest mb-2">
                Curated Portfolio
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream-100">
                Featured Properties
              </h2>
            </div>
            <Link
              to="/browse"
              className="group inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium text-sm transition-colors"
            >
              View all properties
              <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24 md:py-32 border-y border-void-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-display text-accent text-sm uppercase tracking-widest mb-2">
              The RevoFi Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream-100 mb-4">
              From Property to Protocol
            </h2>
            <p className="text-cream-400 text-lg max-w-2xl mx-auto">
              RevoFi transforms physical real estate into liquid, on-chain assets —
              making property investment accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BuildingIcon,
                title: 'Tokenize Properties',
                description:
                  'Premium real estate is verified, appraised, and divided into ERC-20 tokens — each token representing fractional ownership.',
                accent: 'accent',
              },
              {
                icon: CoinsIcon,
                title: 'Invest & Earn Yields',
                description:
                  'Purchase tokens with crypto and earn passive income from rental yields and property appreciation.',
                accent: 'secondary',
              },
              {
                icon: ShieldIcon,
                title: 'Transparent & Secure',
                description:
                  'Every transaction, ownership record, and yield distribution lives on-chain — fully auditable and trustless.',
                accent: 'accent',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl glass-panel hover:border-accent/20 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-shadow ${
                    item.accent === 'secondary'
                      ? 'bg-secondary-muted border border-secondary/25'
                      : 'bg-accent-muted border border-accent/25'
                  }`}
                >
                  <item.icon
                    size={28}
                    className={item.accent === 'secondary' ? 'text-secondary' : 'text-accent'}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-cream-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-void-600/80 p-12 md:p-16 lg:p-20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-void-800/90 to-secondary/[0.06]" />
            <div className="absolute inset-0 bg-brick-pattern opacity-30" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-cream-100 mb-4">
                  Start building your portfolio
                </h2>
                <p className="text-cream-400 text-lg max-w-xl">
                  Join thousands of investors using RevoFi to own tokenized real estate
                  and grow wealth token by token.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <div className="[&_button]:!bg-accent [&_button]:!text-cream-50 [&_button]:!rounded-xl [&_button]:min-h-[48px] [&_button]:px-8 [&_button]:!font-semibold [&_button]:!shadow-glow-sm">
                  <ConnectButton />
                </div>
                <Button size="lg" variant="outline" onClick={() => navigate('/about')}>
                  Learn more
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
