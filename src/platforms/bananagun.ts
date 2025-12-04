import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "banana-gun",
  name: "Banana Gun",
  links: {
    website: "http://bananagun.io/",
    twitter: "https://x.com/BananaGunBot",
    documentation: "https://docs.bananagun.io/",
  },
  tags: ["tool"],
};

const contract = {
  name: "Router",
  address: "BANANAjs7FJiPQqJTGFzkZJndT9o7UmKiYYGaJz6frGu",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-bot`,
  name: "Bot",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
