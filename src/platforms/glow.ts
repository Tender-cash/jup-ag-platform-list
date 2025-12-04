import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "glow",
  name: "Glow",
  tags: ["dapp"],
  links: {
    website: "https://app.glowfinance.xyz/",
    twitter: "https://x.com/glowfinancexyz",
    discord: "https://discord.gg/glowfinance",
  },
};

const contract = {
  name: "Markets",
  address: "GLoWMgcn3VbyFKiC2FGMgfKxYSyTJS7uKFwKY2CSkq9X",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-markets`,
  name: "Markets",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
