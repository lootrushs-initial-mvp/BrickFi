import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

type WalletConnectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function WalletConnectModal({ isOpen, onClose }: WalletConnectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-void-950/80 backdrop-blur-md z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-void-700 bg-void-800 shadow-xl p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-xl font-semibold text-cream-100">
                  Connect wallet
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-cream-400 hover:text-cream-100 hover:bg-void-700 transition-colors"
                >
                  <XIcon size={20} />
                </button>
              </div>
              <div className="flex justify-center mb-4 [&_button]:!rounded-lg [&_button]:!bg-accent [&_button]:!text-void-950">
                <ConnectButton />
              </div>
              <p className="text-sm text-cream-400 text-center">
                By connecting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
