# RevoFi

**Build wealth, token by token.**

RevoFi is a decentralized real estate platform that tokenizes premium properties into on-chain assets. Invest in fractional ownership, earn rental yields, and manage your portfolio — all powered by blockchain.

## Features

- **Tokenized Properties** — Browse and invest in fractional real estate tokens
- **Wallet Integration** — Connect with MetaMask, WalletConnect, and more via RainbowKit
- **Investor Dashboard** — Track portfolio, transactions, and yield distributions
- **Admin Panel** — Manage properties and smart contract deployments
- **Multi-chain Support** — Ethereum, Polygon, Optimism, Arbitrum, Base, and Sepolia testnet

## Design

RevoFi uses a warm, modern design system:

| Token | Value | Usage |
|-------|-------|-------|
| Accent | `#E0634A` | Primary brand, CTAs, highlights |
| Fi (secondary) | `#2DB896` | Finance accents, yields, APY |
| Void | `#0C0E12` → `#1E232B` | Backgrounds and surfaces |
| Cream | `#F5F0EB` | Typography |

Typography: **Outfit** (headings) + **Plus Jakarta Sans** (body)

## Getting Started

### Prerequisites

- Node.js (v24 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Tech Stack

- **Frontend:** React 18, Vite, TypeScript
- **Styling:** Tailwind CSS, Framer Motion
- **Web3:** Wagmi, Viem, RainbowKit
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Smart Contracts:** Solidity (ERC-1155 property tokens via AssetFactory)

## Project Structure

```
src/
├── components/     # UI components (layout, modals, cards)
├── pages/          # Route pages (Home, Browse, Dashboard, Admin)
├── context/        # React context (wallet state)
├── contracts/      # ABI and contract config
├── utils/          # Mock data, types, helpers
└── styles/         # Global CSS and Tailwind tokens

contracts/
└── AssetFactory.sol   # ERC-1155 property tokenization contract
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

&copy; RevoFi — Where real estate meets DeFi.
