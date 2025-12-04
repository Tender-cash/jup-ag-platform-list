import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "jupiter-governance",
  name: "Jupiter DAO",
  description: "The first voting platform for Cats in history.",
  links: {
    website: "https://vote.jup.ag/",
    twitter: "https://x.com/jup_dao",
  },
  tokens: ["JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"],
  tags: ["dao", "dapp"],
};

export const jupiterGovernanceContract = {
  name: "Governance",
  address: "GovaE4iu227srtG2s3tZzB4RmWBzw8sTwrCLZz7kN7rY",
  networkId: NetworkId.solana,
};

export const jupiterVoteContract = {
  name: "Locker Vote",
  address: "voTpe3tHQ7AjQHMapgSue2HJFAh2cGsdokqN3XqmVSj",
  networkId: NetworkId.solana,
};

const asrContract = {
  name: "ASR Distributor",
  address: "Dis2TfkFnXFkrtvAktEkw37sdb7qwJgY6H7YZJwk51wK",
  networkId: NetworkId.solana,
};

const governanceService: ServiceRaw = {
  id: `jupiter-governance-vote`,
  name: "Vote",
  platformId: platform.id,
  contractsRaw: [jupiterGovernanceContract, jupiterVoteContract],
};

const asrService: ServiceRaw = {
  id: `${platform.id}-asr`,
  name: "ASR",
  platformId: platform.id,
  contractsRaw: [asrContract],
};

export const services: ServiceRaw[] = [asrService, governanceService];
