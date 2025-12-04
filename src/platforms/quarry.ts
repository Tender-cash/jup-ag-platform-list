import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "quarry",
  name: "Quarry",
  defiLlamaId: "quarry",
  isDeprecated: true,
  links: {
    website: "https://app.quarry.so/",
    github: "https://github.com/QuarryProtocol",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Mine",
  address: "QMNeHCGYnLVDn1icRAfQZpjPLBNkfGbSKRB83G5d8KB",
  networkId: NetworkId.solana,
};

const mergeContract = {
  name: "Merge Mine",
  address: "QMMD16kjauP5knBwxNUJRZ1Z5o3deBuFrqVjBVmmqto",
  networkId: NetworkId.solana,
};

export const minerService: ServiceRaw = {
  id: `${platform.id}-miner`,
  name: "Miner",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const mergeMinerService: ServiceRaw = {
  id: `${platform.id}-merge-miner`,
  name: "Merge Miner",
  platformId: platform.id,
  contractsRaw: [mergeContract],
};

export const services: ServiceRaw[] = [minerService, mergeMinerService];
