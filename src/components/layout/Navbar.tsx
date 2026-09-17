import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  SearchIcon,
  LayoutDashboardIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useWallet } from '../../context/WalletContext';
import { Logo } from '../ui/Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isConnected, isAdmin } = useWallet();
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon size={18} /> },
    { name: 'Browse', path: '/browse', icon: <SearchIcon size={18} /> },
  ];

  if (isConnected) {
    navLinks.push({
      name: 'Dashboard',
      path: '/user',
      icon: <LayoutDashboardIcon size={18} />,
    });
  }

  if (isAdmin) {
    navLinks.push({
      name: 'Admin',
      path: '/admin',
      icon: <LayoutDashboardIcon size={18} />,
    });
  }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-void-700/60 bg-void-950/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 min-h-[4.5rem]">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo />
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      relative px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2
                      transition-colors duration-200
                      ${isActive
                        ? 'text-accent bg-accent-muted'
                        : 'text-cream-300 hover:text-cream-100 hover:bg-void-700/50'
                      }
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-accent-muted border border-accent/20"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.icon}</span>
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:block [&_button]:!bg-accent/10 [&_button]:!border [&_button]:!border-accent/30 [&_button]:!text-cream-100 [&_button:hover]:!border-accent/60 [&_button:hover]:!bg-accent/20 [&_button]:!rounded-xl [&_button]:!font-semibold">
              <ConnectButton />
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-lg text-cream-400 hover:text-cream-100 hover:bg-void-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t border-void-700/80 bg-void-900/95 backdrop-blur-xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === link.path
                        ? 'bg-accent-muted text-accent border border-accent/20'
                        : 'text-cream-300 hover:bg-void-700 hover:text-cream-100'
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3 mt-3 border-t border-void-700 flex justify-center">
                  <ConnectButton />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
