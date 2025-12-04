import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "degencoinflip",
  name: "Degen Coin Flip",
  description: "A simple game of chance where you can win or lose SOL.",
  links: {
    website: "https://degencoinflip.com/",
    twitter: "https://x.com/degencoinflip",
    discord: "https://discord.gg/degencoinflip",
  },
  tags: ["gaming", "dapp"],
};

const contract = {
  name: "Coinflip",
  address: "BmjJ85zsP2xHPesBKpmHYKt136gzeTtNbeVDcdfybHHT",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-coinflip`,
  name: "Coinflip",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
