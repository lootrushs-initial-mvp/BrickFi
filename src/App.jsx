import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, useAccount } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Routes, Route } from 'react-router-dom';

import { config } from '../wagmi';
import { WalletProvider } from './context/WalletContext';
import { Layout } from './components/layout/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Browse from './pages/Browse';
import Admin from './pages/Admin';
import User from './pages/User';
import PropertyDetail from './pages/PropertyDetail';
import ConnectLanding from './pages/ConnectLanding';

const client = new QueryClient();

function WalletLoading() {
  return (
    <div className="min-h-screen w-full bg-void-950 flex items-center justify-center px-4">
      <p className="text-cream-400 text-sm">Loading wallet…</p>
    </div>
  );
}

function AppRoutes() {
  const { status, isConnected } = useAccount();

  if (status === 'reconnecting' || status === 'connecting') {
    return <WalletLoading />;
  }

  if (!isConnected) {
    return <ConnectLanding />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <WalletProvider>
            <AppRoutes />
          </WalletProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
