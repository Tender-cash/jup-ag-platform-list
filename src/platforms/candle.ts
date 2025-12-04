import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "candle",
  name: "Candle",
  links: {
    website: "https://candle.tv",
    twitter: "https://x.com/candledottv",
  },
  tokens: ["A8bcY1eSenMiMy75vgSnp6ShMfWHRHjeM6JxfM1CNDL"],
  tags: ["memecoin", "dapp"],
};

const stakingContract = {
  name: "Staking",
  address: "CNDL7Y1SYqvSF34aXayqHjm2JZrHB7BfhhVi3TUan3fe",
  networkId: NetworkId.solana,
};

export const minterService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [minterService];
