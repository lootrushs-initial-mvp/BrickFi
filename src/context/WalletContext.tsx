import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

type WalletContextType = {
  isConnected: boolean;
  address: string | null;
  isAdmin: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

// List of admin addresses (can be moved to environment variables or fetched from contract)
const ADMIN_ADDRESSES: string[] = [
  // Add admin addresses here, e.g.:
  // '0x1234567890123456789012345678901234567890',
  // '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
];

export function WalletProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if connected address is an admin
  useEffect(() => {
    if (address && isConnected) {
      const normalizedAddress = address.toLowerCase();
      setIsAdmin(ADMIN_ADDRESSES.some(admin => admin.toLowerCase() === normalizedAddress));
    } else {
      setIsAdmin(false);
    }
  }, [address, isConnected]);

  const connectWallet = () => {
    // This function is kept for compatibility but actual connection
    // is handled by RainbowKit's ConnectButton component
    // The wallet connection will be triggered by the ConnectButton
  };

  const disconnectWallet = () => {
    disconnect();
  };

  const value = useMemo(
    () => ({
      isConnected: isConnected ?? false,
      address: address ?? null,
      isAdmin,
      connectWallet,
      disconnectWallet,
    }),
    [isConnected, address, isAdmin, disconnect]
  );

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};