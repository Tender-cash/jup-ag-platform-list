import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "pumpkin",
  name: "Pumpkin",
  description: "Token Launch Hub",
  tags: ["dapp", "launchpad", "trading", "defi"],
  links: {
    website: "https://pumpkin.fun/",
    telegram: "https://t.me/pumpkindotfun",
    documentation: "https://pumpkindotfun.gitbook.io/",
    twitter: "https://x.com/pumpkindotfun",
  },
  platformToken: "2RBko3xoz56aH69isQMUpzZd9NYHahhwC23A5F3Spkin",
};

const contract = {
  name: "Staking",
  address: "ARFxpgenuFNbyoysFdqEwTgEdxtLtHbTHwCWHJjqWHTb",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "pumpkin-staking",
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
