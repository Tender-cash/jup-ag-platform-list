import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "grass",
  name: "Grass",
  description: "Get rewarded for your unused internet",
  links: {
    website: "https://www.grass.io/",
    discord: "https://discord.com/invite/getgrass",
    twitter: "https://x.com/grass",
    documentation: "https://grass-foundation.gitbook.io/grass-docs",
  },
  tokens: ["Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs"],
  tags: ["tool", "dapp"],
};

const contract = {
  name: "Staking",
  address: "EyxPPowqBRTpZpiDb2ixUR6XUU1VJwTCNgJdK8eyc6kc",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "Eohp5jrnGQgP74oD7ij9EuCSYnQDLLHgsuAmtSTuxABk",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [service, airdropService];
