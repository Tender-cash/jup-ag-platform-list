import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "jito",
  name: "Jito",
  description: "Earn MEV rewards through Jito's Solana Liquid Staking pool.",
  defiLlamaId: "jito",
  links: {
    website: "https://jito.network/",
    discord: "https://discord.gg/jito",
    twitter: "https://twitter.com/jito_sol",
    github: "https://github.com/jito-foundation",
    medium: "https://medium.com/@Jito-Foundation",
    documentation: "https://www.jito.network/docs/jitosol/overview/",
  },
  tokens: [
    "jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL",
    "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
  ],
  tags: ["tool"],
};

const contract = {
  name: "Governance",
  address: "jtogvBNH3WBSWDYD5FJfQP2ZxNTuf82zL8GkEhPeaJx",
  networkId: NetworkId.solana,
};

const restakingContract = {
  name: "Restaking",
  address: "Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "mERKcfxMC5SqJn4Ld4BUris3WKZZ1ojjWJ3A3J5CKxv",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-governance`,
  name: "Governance",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const restakingService: ServiceRaw = {
  id: `${platform.id}-restaking`,
  name: "Restaking",
  platformId: platform.id,
  contractsRaw: [restakingContract],
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  service,
  restakingService,
  airdropService,
];
