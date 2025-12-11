import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "drip",
  name: "Drip Haus",
  description:
    "Drip Haus is a digital collectibles platform where creators distribute free NFTs to subscribers and earn from secondary sales.",
  links: {
    website: "https://drip.haus/",
    twitter: "https://x.com/drip_haus",
    documentation: "https://drip.haus/faq",
  },
  tags: ["nft-marketplace", "dapp"],
};

export const collectingService: ServiceRaw = {
  id: `${platform.id}-collecting`,
  name: "Collecting",
  platformId: platform.id,
  contractsRaw: [],
  link: "https://drip.haus/",
  description:
    "Free NFT distribution platform using compressed NFT technology to deliver digital art, music, and collectibles to subscribers at near-zero cost.",
};

export const creatorRewardsService: ServiceRaw = {
  id: `${platform.id}-creator-rewards`,
  name: "Creator Rewards",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Droplets-based donation system enabling collectors to directly support creators by minting NFTs and tipping through in-platform currency.",
};

export const services: ServiceRaw[] = [
  collectingService,
  creatorRewardsService,
];
