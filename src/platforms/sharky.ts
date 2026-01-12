import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "sharky",
  name: "Sharky",
  description:
    "Sharky is an escrowless NFT lending and borrowing protocol where users can borrow SOL against NFTs or lend SOL to earn yield.",
  defiLlamaId: "sharky",
  tags: ["dapp", "lending", "defi", "nft"],
  links: {
    website: "https://sharky.fi/",
    discord: "https://discord.gg/sharkyfi",
    twitter: "https://x.com/SharkyFi",
    github: "https://github.com/SharkyFi",
  },
  platformToken: "SHARKSYJjqaNyxVfrpnBN9pjgkhwDhatnMyicWPnr1s",
};

const contract = {
  name: "Sharky",
  address: "SHARKobtfF1bHhxD2eqftjHBdVSCbKo9JtgK71FhELP",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "sharky-lending",
  name: "Sharky",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://sharky.fi/",
  description:
    "Escrowless NFT lending protocol enabling instant SOL loans against NFT collateral with fixed rates, or earning yield by lending to borrowers.",
};

export const services: ServiceRaw[] = [service];
