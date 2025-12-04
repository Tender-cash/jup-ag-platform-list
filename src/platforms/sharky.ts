import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "sharky",
  name: "Sharky",
  description:
    "Sharky is the first escrowless NFT lending and borrowing protocol on Solana. Users can borrow SOL against their NFTs or Lend SOL and earn a high % APY.",
  defiLlamaId: "sharky",
  tags: ["dapp"],
  links: {
    website: "https://sharky.fi/",
    discord: "https://discord.gg/sharkyfi",
    twitter: "https://twitter.com/SharkyFi",
    github: "https://github.com/SharkyFi",
  },
  tokens: ["SHARKSYJjqaNyxVfrpnBN9pjgkhwDhatnMyicWPnr1s"],
};

const contract = {
  name: "Sharky",
  address: "SHARKobtfF1bHhxD2eqftjHBdVSCbKo9JtgK71FhELP",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "sharky",
  name: "Sharky",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
