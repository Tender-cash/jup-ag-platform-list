import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "maple",
  name: "Maple",
  defiLlamaId: "parent#maple-finance",
  links: {
    website: "https://www.maple.finance/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Lending",
  address: "5D9yi4BKrxF8h65NkVE1raCCWFKUs5ngub2ECxhvfaZe",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
