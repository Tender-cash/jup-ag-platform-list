import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "squads",
  name: "Squads",
  tags: ["tool", "dapp"],
  links: {
    website: "https://squads.so/",
    twitter: "https://x.com/SquadsProtocol",
    github: "https://github.com/Squads-Protocol",
    documentation: "https://docs.squads.so/main/basics/welcome-to-squads",
  },
};

const contract = {
  name: "Multisig V4",
  address: "SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-multisig`,
  name: "Multisig",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
