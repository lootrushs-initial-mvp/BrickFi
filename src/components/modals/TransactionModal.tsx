import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, CheckCircleIcon, AlertCircleIcon, LoaderIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

type TransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    price: number;
    tokenPrice: number;
  };
};

export function TransactionModal({
  isOpen,
  onClose,
  property,
}: TransactionModalProps) {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'initial' | 'processing' | 'success' | 'error'>('initial');
  const [tokenAmount, setTokenAmount] = useState(1);

  const handleTransaction = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus(Math.random() > 0.1 ? 'success' : 'error');
    }, 2000);
  };

  const handleClose = () => {
    if (status === 'processing') return;
    setStatus('initial');
    setTokenAmount(1);
    onClose();
  };

  const handleViewPortfolio = () => {
    handleClose();
    navigate('/user');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-void-950/80 backdrop-blur-md z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl glass-panel shadow-glow-sm p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-xl font-semibold text-cream-100">
                  {status === 'initial' && 'Purchase tokens'}
                  {status === 'processing' && 'Processing'}
                  {status === 'success' && 'Complete'}
                  {status === 'error' && 'Failed'}
                </h3>
                <button
                  onClick={handleClose}
                  disabled={status === 'processing'}
                  className="p-2 rounded-lg text-cream-400 hover:text-cream-100 hover:bg-void-700 transition-colors disabled:opacity-50"
                >
                  <XIcon size={20} />
                </button>
              </div>

              {status === 'initial' && (
                <>
                  <div className="mb-6 space-y-4">
                    <p className="text-cream-400">
                      <span className="text-cream-200 font-medium">{property.title}</span>
                      <br />
                      Token price: <span className="text-accent">{property.tokenPrice} ETH</span>
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-cream-400 mb-2">Number of tokens</label>
                      <div className="flex items-center gap-0">
                        <button
                          type="button"
                          onClick={() => setTokenAmount((n) => Math.max(1, n - 1))}
                          className="bg-void-700 border border-void-600 text-cream-100 px-3 py-2.5 rounded-l-xl hover:bg-void-600 transition-colors"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={tokenAmount}
                          onChange={(e) => setTokenAmount(Math.max(1, parseInt(e.target.value) || 1))}
                          min={1}
                          className="w-20 bg-void-700 border-y border-void-600 text-cream-100 text-center py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
                        />
                        <button
                          type="button"
                          onClick={() => setTokenAmount((n) => n + 1)}
                          className="bg-void-700 border border-void-600 text-cream-100 px-3 py-2.5 rounded-r-xl hover:bg-void-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-void-700/50 border border-void-600 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-cream-400">Subtotal</span>
                        <span className="text-cream-100">{(property.tokenPrice * tokenAmount).toFixed(4)} ETH</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-cream-400">Gas (est.)</span>
                        <span className="text-cream-100">0.0012 ETH</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-void-600 font-medium">
                        <span className="text-cream-300">Total</span>
                        <span className="text-accent">{(property.tokenPrice * tokenAmount + 0.0012).toFixed(4)} ETH</span>
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleTransaction} fullWidth>
                    Confirm purchase
                  </Button>
                </>
              )}

              {status === 'processing' && (
                <div className="text-center py-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="inline-flex mb-4"
                  >
                    <LoaderIcon size={48} className="text-accent" />
                  </motion.div>
                  <p className="text-cream-300 mb-1">Processing your transaction...</p>
                  <p className="text-sm text-cream-400">Do not close this window.</p>
                </div>
              )}

              {status === 'success' && (
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                    className="inline-flex mb-4 text-emerald-400"
                  >
                    <CheckCircleIcon size={48} />
                  </motion.div>
                  <h4 className="font-display text-xl font-semibold text-cream-100 mb-2">Purchase successful</h4>
                  <p className="text-cream-400 mb-6">
                    You purchased {tokenAmount} token{tokenAmount > 1 ? 's' : ''} of {property.title}.
                  </p>
                  <Button onClick={handleViewPortfolio} fullWidth>
                    View portfolio
                  </Button>
                </div>
              )}

              {status === 'error' && (
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                    className="inline-flex mb-4 text-red-400"
                  >
                    <AlertCircleIcon size={48} />
                  </motion.div>
                  <h4 className="font-display text-xl font-semibold text-cream-100 mb-2">Transaction failed</h4>
                  <p className="text-cream-400 mb-6">
                    Something went wrong. You can try again or close this window.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={handleClose} fullWidth>
                      Cancel
                    </Button>
                    <Button onClick={handleTransaction} fullWidth>
                      Try again
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
