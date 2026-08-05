/**
 * Contract configuration for the DeFi Real Estate app.
 * Set VITE_ASSET_FACTORY_ADDRESS in .env to your deployed AssetFactory address.
 */

import { assetFactoryAbi } from './assetFactoryAbi';

/** Deployed AssetFactory address (one per chain in production). */
export const ASSET_FACTORY_ADDRESS = (import.meta.env.VITE_ASSET_FACTORY_ADDRESS as string) || '';

/** Whether a valid contract address is configured. */
export const isContractConfigured = Boolean(
  ASSET_FACTORY_ADDRESS &&
  ASSET_FACTORY_ADDRESS.startsWith('0x') &&
  ASSET_FACTORY_ADDRESS.length === 42
);

/** AssetFactory ABI for wagmi/viem. */
export { assetFactoryAbi };

/** Contract config object for use with wagmi readContract / writeContract. Only valid when isContractConfigured is true. */
export const assetFactoryConfig = isContractConfigured
  ? { address: ASSET_FACTORY_ADDRESS as `0x${string}`, abi: assetFactoryAbi } as const
  : { address: undefined as undefined, abi: assetFactoryAbi } as const;
