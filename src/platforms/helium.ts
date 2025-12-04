import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "helium",
  name: "Helium",
  links: {
    website: "https://www.helium.com/",
    twitter: "https://twitter.com/helium",
  },
  tags: ["tool", "dapp"],
};

const contract = {
  name: "Voter Stake Registry",
  address: "hvsrNC3NKbcryqDs2DocYHZ9yPKEVzdSjQG6RVtK1s8",
  networkId: NetworkId.solana,
};

const daoContract = {
  name: "Sub DAO",
  address: "hdaoVTCqhfHHo75XdAMxBKdUqvq1i5bF23sisBqVgGR",
  networkId: NetworkId.solana,
};

export const governanceV1Service: ServiceRaw = {
  id: `${platform.id}-governance-v1`,
  name: "Governance V1",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const governanceV2Service: ServiceRaw = {
  id: `${platform.id}-governance-v2`,
  name: "Governance V2",
  platformId: platform.id,
  contractsRaw: [daoContract],
};

export const services: ServiceRaw[] = [
  governanceV1Service,
  governanceV2Service,
];
