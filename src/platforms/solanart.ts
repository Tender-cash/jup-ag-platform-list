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

const globalOfferV1Contract = {
  name: "Global Offer V1",
  address: "Gov2UZUUffrk1CYYSJu943sM6jAMF31zGz8uJywQKziY",
  networkId: NetworkId.solana,
};

const globalOfferV2Contract = {
  name: "Global Offer V2",
  address: "5ZfZAwP2m93waazg8DkrrVmsupeiPEvaEHowiUP7UAbJ",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-marketplace`,
  name: "Marketplace",
  platformId: platform.id,
  contractsRaw: [mainContract],
  description:
    "NFT marketplace for listing, buying, and selling digital collectibles with collection-based browsing.",
};

export const globalOfferV1Service: ServiceRaw = {
  id: `${platform.id}-global-offer-v1`,
  name: "Global Offer V1",
  platformId: platform.id,
  contractsRaw: [globalOfferV1Contract],
  description:
    "Collection-wide offer system allowing buyers to place bids on any NFT within a collection.",
};

export const globalOfferService: ServiceRaw = {
  id: `${platform.id}-global-offer`,
  name: "Global Offer V2",
  platformId: platform.id,
  contractsRaw: [globalOfferV2Contract],
  description:
    "Enhanced collection-wide bidding with improved offer management and trait-based filtering support.",
};

export const services: ServiceRaw[] = [
  stakingService,
  globalOfferV1Service,
  globalOfferService,
];
