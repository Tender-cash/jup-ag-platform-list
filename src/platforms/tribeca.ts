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
  id: `${platform.id}-locker`,
  name: "Locker",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://tribeca.so/",
  description:
    "Voting escrow locker converting governance tokens into veTokens with time-weighted voting power for long-term aligned participants.",
};

export const governanceService: ServiceRaw = {
  id: `${platform.id}-governance`,
  name: "Governance",
  platformId: platform.id,
  contractsRaw: [governanceContract],
  description:
    "DAO governance protocol enabling proposal creation, voting, and execution through smart wallet multisig functionality.",
};

export const services: ServiceRaw[] = [service, governanceService];
