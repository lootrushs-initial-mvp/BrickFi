import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  MapPinIcon,
  CoinsIcon,
  FileTextIcon,
  ClipboardCheckIcon,
  BarChart2Icon,
  CalendarIcon,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { TransactionModal } from '../components/modals/TransactionModal';
import { useWallet } from '../context/WalletContext';
import { properties } from '../utils/mockData';

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isConnected } = useWallet();
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-cream-100 mb-4">
            Property not found
          </h2>
          <button
            onClick={() => navigate('/browse')}
            className="text-accent hover:underline font-medium"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  const progressPercentage = (property.tokensSold / property.totalTokens) * 100;

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-cream-400 hover:text-accent mb-8 transition-colors font-medium text-sm"
          >
            <ArrowLeftIcon size={18} />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl overflow-hidden glass-panel"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-950/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge color="accent">Listed on RevoFi</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      color={
                        property.status === 'Available'
                          ? 'green'
                          : property.status === 'Sold Out'
                            ? 'red'
                            : 'yellow'
                      }
                    >
                      {property.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-cream-100 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-cream-400 mb-8">
                    <MapPinIcon size={18} />
                    <span>{property.location}</span>
                  </div>
                  <div className="mb-8">
                    <h2 className="font-display text-lg font-semibold text-cream-100 mb-3">
                      About this property
                    </h2>
                    <p className="text-cream-400 leading-relaxed">{property.description}</p>
                  </div>
                  <div className="mb-8">
                    <h2 className="font-display text-lg font-semibold text-cream-100 mb-3">
                      Features
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <ClipboardCheckIcon size={16} className="text-accent flex-shrink-0" />
                          <span className="text-cream-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-cream-100 mb-3">
                      Documents
                    </h2>
                    <div className="space-y-2">
                      {property.documents.map((doc, index) => (
                        <a
                          key={index}
                          href={doc.url}
                          className="flex items-center gap-3 p-3 rounded-xl bg-void-700/50 border border-void-600 hover:border-void-500 hover:bg-void-700 transition-colors"
                        >
                          <FileTextIcon size={18} className="text-accent flex-shrink-0" />
                          <span className="text-cream-300">{doc.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-28 h-fit"
            >
              <div className="rounded-2xl glass-panel p-6 shadow-glow-sm">
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div>
                    <div className="text-cream-400 text-sm mb-0.5">Total value</div>
                    <div className="font-display text-2xl font-bold text-cream-100">
                      ${property.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-cream-400 text-sm mb-0.5">Token price</div>
                    <div className="font-display text-2xl font-bold text-accent flex items-center justify-end gap-1">
                      <CoinsIcon size={20} />
                      {property.tokenPrice} ETH
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-cream-400">Funding progress</span>
                    <span className="text-cream-100 font-medium">
                      {property.tokensSold} / {property.totalTokens} tokens
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-void-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs mt-1.5 text-cream-400">
                    <span>{progressPercentage.toFixed(1)}% funded</span>
                    <span>Goal: {property.totalTokens} tokens</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-void-700/40 border border-void-600/80">
                    <div className="flex items-center gap-1.5 text-cream-400 text-xs mb-1">
                      <BarChart2Icon size={14} className="text-secondary" />
                      Expected return
                    </div>
                    <div className="font-display font-semibold text-secondary">
                      {property.returnRate}% <span className="text-cream-400 text-sm font-normal">/ year</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-void-700/40 border border-void-600/80">
                    <div className="flex items-center gap-1.5 text-cream-400 text-xs mb-1">
                      <CalendarIcon size={14} />
                      Min. hold
                    </div>
                    <div className="font-display font-semibold text-cream-100">
                      6 <span className="text-cream-400 text-sm font-normal">months</span>
                    </div>
                  </div>
                </div>
                {property.contractAddress && (
                  <div className="mb-6">
                    <div className="text-sm text-cream-400 mb-2">Smart contract</div>
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-void-700/50 border border-void-600">
                      <span className="text-accent font-mono text-sm truncate flex-1">
                        {property.contractAddress}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(property.contractAddress || '')}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>
                )}
                <Button
                  fullWidth
                  size="lg"
                  disabled={!isConnected || property.status !== 'Available'}
                  onClick={() => setIsTransactionModalOpen(true)}
                >
                  {!isConnected
                    ? 'Connect wallet to buy'
                    : property.status !== 'Available'
                      ? property.status
                      : 'Buy tokens'}
                </Button>
                {!isConnected && (
                  <p className="text-center text-sm text-cream-400 mt-4">
                    Connect your wallet to purchase property tokens.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={() => setIsTransactionModalOpen(false)}
        property={{
          id: property.id,
          title: property.title,
          price: property.price,
          tokenPrice: property.tokenPrice,
        }}
      />
    </div>
  );
}
