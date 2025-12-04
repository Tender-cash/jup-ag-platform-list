import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "aurory",
  name: "Aurory",
  description:
    "Seekers of Tokane by Aurory, is a free-to-play, immersive JRPG built by a team of +60 gaming industry veterans.",
  tags: ["nft-collection", "gaming"],
  links: {
    website: "https://app.aurory.io",
    discord: "https://discord.gg/aurory",
    twitter: "https://twitter.com/AuroryProject",
    documentation: "https://docs.aurory.io/",
    github: "https://github.com/Aurory-Game",
  },
  tokens: ["AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP"],
};

const contract = {
  name: "Staking",
  address: "StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking-1`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const stakingService2: ServiceRaw = {
  id: `${platform.id}-staking-2`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [stakingService, stakingService2];
