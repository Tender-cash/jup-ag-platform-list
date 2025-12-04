import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "carrot",
  name: "Carrot",
  defiLlamaId: "carrot",
  links: {
    website: "https://deficarrot.com/",
    twitter: "https://x.com/DeFiCarrot",
  },
  tokens: ["CRTx1JouZhzSU6XytsE42UQraoGqiHgxabocVfARTy2s"],
  tags: ["stablecoin", "dapp"],
};

const minterContract = {
  name: "Minter",
  address: "CarrotwivhMpDnm27EHmRLeQ683Z1PufuqEmBZvD282s",
  networkId: NetworkId.solana,
};

const boostContract = {
  name: "Boost",
  address: "C73nDAFn23RYwiFa6vtHshSbcg8x6BLYjw3bERJ3vHxf",
  networkId: NetworkId.solana,
};

export const minterService: ServiceRaw = {
  id: `${platform.id}-minter`,
  name: "Minter",
  platformId: platform.id,
  contractsRaw: [minterContract],
};

export const boostService: ServiceRaw = {
  id: `${platform.id}-boost`,
  name: "Boost",
  platformId: platform.id,
  contractsRaw: [boostContract],
};

export const services: ServiceRaw[] = [minterService, boostService];
