/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_TESTNETS: string
  readonly VITE_WALLETCONNECT_PROJECT_ID: string
  /** Deployed AssetFactory contract address (e.g. from Sepolia). */
  readonly VITE_ASSET_FACTORY_ADDRESS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
