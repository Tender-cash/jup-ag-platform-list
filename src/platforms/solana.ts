import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solana",
  name: "Solana",
  description:
    "Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.",
  links: {
    website: "https://solana.com/",
    discord: "https://solana.com/discord",
    telegram: "https://solana.com/telegram",
    twitter: "https://solana.com/twitter",
    github: "https://solana.com/github",
    documentation: "https://solana.com/docs",
  },
  tags: ["dapp"],
};

const solanaStakingContract = {
  name: "Staking",
  address: "Stake11111111111111111111111111111111111111",
  networkId: NetworkId.solana,
};

const solanaStakePoolContract = {
  name: "Stake Pool",
  address: "SPoo1Ku8WFXoNDMHPsrGSTSG1Y47rzgn41SLUNakuHy",
  networkId: NetworkId.solana,
};

const singleValidatorStakePoolContract = {
  name: "Single Validator Stake Pool",
  address: "SVSPxpvHdN29nkVg9rPapPNDddN5DipNLRUFhyjFThE",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-stake`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [solanaStakingContract],
};

export const stakePoolService: ServiceRaw = {
  id: `${platform.id}-stake-pool`,
  name: "Stake Pool",
  platformId: platform.id,
  contractsRaw: [solanaStakePoolContract],
};

export const singleValidatorStakePoolService: ServiceRaw = {
  id: `${platform.id}-single-validator-stake-pool`,
  name: "Single-Validator Stake Pool",
  platformId: platform.id,
  contractsRaw: [singleValidatorStakePoolContract],
};

export {
  solanaStakingContract,
  solanaStakePoolContract,
  singleValidatorStakePoolContract,
};

export const services: ServiceRaw[] = [
  stakingService,
  stakePoolService,
  singleValidatorStakePoolService,
];
