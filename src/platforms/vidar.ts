import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "vidar",
  name: "Vidar",
  links: {
    website: "https://www.vidar.finance/dashboard",
  },
  tokens: [
    "K3UfGb8Cr6g2K4GKFEQFxHRhUMq9E9tb3vWepCf1jUp",
    "7V2ZDLCxZPvx5m5cuexseBHWBMkpj3rfLMuPsuVkecDA",
  ],
  tags: ["dapp"],
};

const nokContract = {
  name: "wNOK Minter",
  address: "sta1L8xffHa3K1puWcTX1m4QWHek4Gs8PJZQtGEFwmX",
  networkId: NetworkId.solana,
};

const ljupMinterContract = {
  name: "LJUP Minter",
  address: "1juPgnkY3i9dGkcuZahmby3exN4qpoq5HZ7rKKZsKtA",
  networkId: NetworkId.solana,
};

const safeLaunchContract = {
  name: "SafeLaunch",
  address: "SAFEuracFxm3sZfhUNtComzcyS4RTkcNccbkWWb4PH5",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "BGLD Staking",
  address: "BStkNZqnbLCmZWs52BcJVNiG3XMwoiS1DuwnGg4ZQrrC",
  networkId: NetworkId.solana,
};

const minerContract = {
  name: "BGLD Miner",
  address: "BGLDbLHXzZEKvZX2PAkvSChWtZYySZ16Drj6NX247AfY",
  networkId: NetworkId.solana,
};

export const ljupService: ServiceRaw = {
  id: `${platform.id}-ljup`,
  name: "LJUP Minter",
  platformId: platform.id,
  contractsRaw: [ljupMinterContract],
  description:
    "Token minting service for creating liquid JUP (LJUP) tokens representing staked JUP positions.",
};

export const nokService: ServiceRaw = {
  id: `${platform.id}-wNOK`,
  name: "wNOK Minter",
  platformId: platform.id,
  contractsRaw: [nokContract],
  description:
    "Token minting service for creating wrapped NOK (wNOK) tokens on-chain.",
};

export const safeLaunchService: ServiceRaw = {
  id: `${platform.id}-safe-launch`,
  name: "SafeLaunch",
  platformId: platform.id,
  contractsRaw: [safeLaunchContract],
  description:
    "Token launchpad with safety mechanisms for fair and secure new token launches.",
};

export const bgldStakingService: ServiceRaw = {
  id: `${platform.id}-bgld-staking`,
  name: "BGLD Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  description:
    "BGLD token staking for earning rewards and participating in protocol governance.",
};

export const bgldMinerService: ServiceRaw = {
  id: `${platform.id}-bgld-miner`,
  name: "BGLD Miner",
  platformId: platform.id,
  contractsRaw: [minerContract],
  description:
    "Liquidity mining program for earning BGLD token rewards through protocol participation.",
};

export const services: ServiceRaw[] = [
  ljupService,
  nokService,
  safeLaunchService,
  bgldStakingService,
  bgldMinerService,
];
