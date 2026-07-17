export type Property = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  price: number;
  tokenPrice: number;
  totalTokens: number;
  tokensSold: number;
  status: 'Available' | 'Sold Out' | 'Coming Soon';
  features: string[];
  documents: {
    name: string;
    url: string;
  }[];
  contractAddress?: string;
  returnRate?: number; // Annual return rate in %
};

export type UserPortfolio = {
  totalInvested: number;
  totalProperties: number;
  properties: {
    propertyId: string;
    propertyName: string;
    tokensOwned: number;
    investmentValue: number;
  }[];
};
