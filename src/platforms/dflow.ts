import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "dflow",
  name: "DFlow",
  description: "Low-latency Solana DEX aggregator",
  links: {
    website: "https://dflow.net/",
    discord: "https://discord.gg/dflow",
    twitter: "https://x.com/dflowprotocol",
  },
  tags: ["dapp", "bridge"],
};

export const contract = {
  name: "Aggregator",
  address: "DF1ow4tspfHX9JwWJsAb9epbkA8hmpSEAtxXy1V27QBH",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-aggregator`,
  name: "Aggregator",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
