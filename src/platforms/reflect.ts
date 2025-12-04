import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "reflect",
  name: "Reflect",
  description: "Autonomous money designed for the stablecoin era",
  links: {
    website: "https://www.reflect.money/",
    twitter: "https://x.com/reflectmoney",
    documentation: "https://docs.reflect.money/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "USDC+ Mint",
  address: "rFLctqnUuxLmYsW5r9zNujfJx9hGpnP1csXr9PYwVgX",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-mint`,
  name: "Stablecoins",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
