import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solsea",
  name: "Solsea",
  isDeprecated: true,
  links: {
    website: "https://solsea.io/",
    twitter: "https://twitter.com/SolSeaNFT",
  },
  tags: ["nft-marketplace"],
};

export const contract = {
  name: "Marketplace",
  address: "617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU",
  networkId: NetworkId.solana,
};

const metaplexContract = {
  name: "Metaplex",
  address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
  networkId: NetworkId.solana,
};

export const solanaStakingService: ServiceRaw = {
  id: `${platform.id}-marketplace`,
  name: "Marketplace",
  platformId: platform.id,
  contractsRaw: [contract, metaplexContract],
};

export const services: ServiceRaw[] = [solanaStakingService];
