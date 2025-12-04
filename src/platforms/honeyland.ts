import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "honeyland",
  name: "Honeyland",
  description: "HDX Staking",
  tags: ["dapp"],
  links: {
    website: "https://honey.land/",
  },
};

const contract = {
  name: "Staking",
  address: "F1pkXm8W1WNbRvMoZTuKftHJ92ffuzddCCSRKKvCVL7n",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "honeyland-staking",
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
