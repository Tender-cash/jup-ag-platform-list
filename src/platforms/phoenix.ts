import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "phoenix",
  name: "Phoenix",
  description:
    "Phoenix is a decentralized limit order book supporting markets for spot assets.",
  defiLlamaId: "phoenix",
  links: {
    website: "https://www.phoenix.trade/",
    discord: "https://discord.gg/ESaTYGzqpd",
    twitter: "https://twitter.com/PhoenixTrade",
    github: "https://github.com/Ellipsis-Labs",
    documentation:
      "https://ellipsis-labs.gitbook.io/phoenix-dex/tRIkEFlLUzWK9uKO3W2V",
  },
  tags: ["dapp"],
};

const contract: ContractRaw = {
  name: "Market",
  address: "PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY",
  networkId: NetworkId.solana,
};

export const marketService: ServiceRaw = {
  id: `${platform.id}-market`,
  name: "Market",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://www.phoenix.trade/",
  description:
    "On-chain central limit order book enabling traders to place limit and market orders with full price-time priority matching.",
};

export const services: ServiceRaw[] = [marketService];
