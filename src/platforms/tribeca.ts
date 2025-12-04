import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "tribeca",
  name: "Tribeca",
  description: "Onchain Governance.",
  tags: ["dapp", "dao"],
  links: {
    website: "https://tribeca.so/gov/",
    twitter: "https://x.com/thesaberdao",
    github: "https://github.com/saberdao/tribeca",
  },
};

const contract = {
  name: "Locker",
  address: "LocktDzaV1W2Bm9DeZeiyz4J9zs4fRqNiYqQyracRXw",
  networkId: NetworkId.solana,
};

const governanceContract = {
  name: "Governance",
  address: "Govz1VyoyLD5BL6CSCxUJLVLsQHRwjfFj1prNsdNg5Jw",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}`,
  name: "Locker",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const governanceService: ServiceRaw = {
  id: `${platform.id}-governance`,
  name: "Governance",
  platformId: platform.id,
  contractsRaw: [governanceContract],
};

export const services: ServiceRaw[] = [service, governanceService];
