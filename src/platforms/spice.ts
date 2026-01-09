import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "spice",
  name: "Spice",
  description:
    "Token for Governance & Currency in the Lowlife Forms Gameverse.",
  links: {
    website: "https://staking.spicecoin.com/",
    twitter: "https://x.com/spiceonsol",
  },
  tags: ["dapp", "gaming"],
};

const stakingContract = {
  name: "Staking",
  address: "DQtwoVmEgaGe3hCuefpnBR1rjtLJLJ7sKjVZbUEsSseC",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: "spice-staking",
  name: "Spice",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [stakingService];
