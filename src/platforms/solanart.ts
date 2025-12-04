import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solanart",
  name: "Solanart",
  links: {
    website: "https://solanart.io/",
    twitter: "https://x.com/SolanartNFT",
  },
  tags: ["nft-marketplace"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
  networkId: NetworkId.solana,
};

const globalOfferContract = {
  name: "Global Offer",
  address: "5ZfZAwP2m93waazg8DkrrVmsupeiPEvaEHowiUP7UAbJ",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-marketplace`,
  name: "Marketplace",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const globalOfferService: ServiceRaw = {
  id: `${platform.id}-global-offer`,
  name: "Global Offer",
  platformId: platform.id,
  contractsRaw: [globalOfferContract],
};

export const services: ServiceRaw[] = [stakingService, globalOfferService];
