# RevoFi – Smart Contracts

This folder contains the smart contracts for the **RevoFi** platform — tokenized real estate on-chain. Only contracts relevant to fractional property ownership are included.

---

## Contracts

### AssetFactory.sol

**Purpose:** Core contract for RevoFi. Mints and manages **ERC1155 property tokens** (fractional ownership of real estate).

- **Token standard:** ERC1155 (supports multiple token IDs and fungible/semi-fungible amounts per property).
- **Roles:** `DEFAULT_ADMIN_ROLE`, `WHITELISTER_ROLE` (via OpenZeppelin AccessControl).
- **Main flow:**
  - Admin mints tokens to the contract owner via `batchMint`.
  - Whitelister adds buyers via `addToWhitelist(tokenId, address)`.
  - Buyers call `buy(tokenId, buyer, amount, data)` with `msg.value == cost` to purchase tokens (whitelist and expiry apply).
- **Key state:** `cost` (wei per token), `expiry` (whitelist validity), `paused`, `owners`, `whitelist`.
- **Dependencies:** OpenZeppelin ERC1155, AccessControl, Ownable, Strings (Solidity 0.8+; no SafeMath).

**Deployment:** Deploy one AssetFactory per property (or per asset class). The RevoFi frontend uses `VITE_ASSET_FACTORY_ADDRESS` to target the deployed contract.

---

### Migrations.sol

**Purpose:** Truffle migration tracking (records the last completed migration). Used only if you run Truffle migrations; safe to keep for compatibility.

---

## Removed (not related to RevoFi)

The following were removed because they are not part of this project:

| File         | Reason |
|-------------|--------|
| Asteroid.sol | ERC1155 collectible/game (“Asteroid” NFTs). |
| Seed.sol     | ERC1155 “Seedling” game/collectible tokens. |
| Character.sol | ERC721 “Character” game NFTs (DNA, level, rarity). |
| Temp.sol    | Large external dump (e.g. verified contract from block explorer). |

---

## Usage with the RevoFi frontend

1. Deploy **AssetFactory** (e.g. via Remix or Truffle) with constructor args: `_root`, `_name`, `_symbol`, `_uri`, `_cURI`, `_expiry`, `_cost`.
2. Set **VITE_ASSET_FACTORY_ADDRESS** in `.env` to the deployed contract address.
3. The app uses the ABI in `src/contracts/assetFactoryAbi.ts` and config in `src/contracts/config.ts` for reads/writes (e.g. `getCost`, `buy`, `balanceOf`, `isWhitelisted`).
