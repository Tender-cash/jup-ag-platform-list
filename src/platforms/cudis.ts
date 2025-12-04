import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "cudis",
  name: "Cudis",
  tags: ["dapp", "fitness"],
  links: {
    website: "https://www.cudis.xyz/002",
  },
};

const contract = {
  name: "Main",
  address: "H3tzuPeKMHd1Wee4JyuYbwKX6pHTcKGDgPw8caVNTvQu",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
