import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "nodepay",
  name: "Nodepay",
  tags: ["tool"],
  links: {
    website: "https://nodepay.ai/",
    discord: "https://discord.com/invite/nodepay",
    twitter: "https://x.com/nodepay_ai",
    telegram: "https://t.me/nodepaycommunitychat",
  },
};

const stakingContract = {
  name: "Staking",
  address: "stakevLBn36MxF5qcjXFxChfFDhL9LrLqj4WC3HPpGT",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [service];
