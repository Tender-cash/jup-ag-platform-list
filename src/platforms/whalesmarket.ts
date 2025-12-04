import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "whalesmarket",
  name: "Whales Market",
  description:
    "Trade like a pro with advanced tools and features at your fingertips",
  defiLlamaId: "whales-market",
  links: {
    website: "https://app.whales.market/",
    discord: "https://discord.com/invite/whalesmarket",
    twitter: "https://twitter.com/WhalesMarket",
    github: "https://github.com/Whales-Market/",
    documentation: "https://docs.whales.market/",
  },
  tokens: ["GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1"],
  tags: ["dapp"],
};

const contract = {
  name: "Prediction Market",
  address: "stPdYNaJNsV3ytS9Xtx4GXXXRcVqVS6x66ZFa26K39S",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-prediction-market`,
  name: "Prediction Market",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
