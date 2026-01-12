import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "flash",
  name: "FlashTrade",
  description:
    "FlashTrade is a perpetuals DEX offering instant order fills and on-demand liquidity for leveraged trading.",
  defiLlamaId: "flashtrade",
  links: {
    website: "https://flash.trade/",
    discord: "https://discord.com/invite/HqYDWnMP6J",
    twitter: "https://x.com/FlashTrade",
    github: "https://github.com/flash-trade",
    documentation: "https://docs.flash.trade/flash-trade",
  },
  platformToken: "FAFxVxnkzZHMCodkWyoccgUNgVScqMw2mhhQBYDFjFAF",
  tokens: [
    "NUZ3FDWTtN5SP72BsefbsqpnbAY5oe21LE8bCSkqsEK",
    "AbVzeRUss8QJYzv2WDizDJ2RtsD1jkVyRjNdAzX94JhG",
    "EngqvevoQ8yaNdtxY7sSh5J7NF74k3cDKi9v9pHi5H3B",
    "Ab6K8anKSwAz8VXJPVvAVjPQMJNoVhwzfF7FtAB5PNW9",
    "4PZTRNrHnxWBqLRvX5nuE6m1cNR8RqB4kWvVYjDkMd2H",
  ],
  tags: ["dapp", "dex", "trading", "defi"],
};

const contract = {
  name: "FlashTrade",
  address: "FLASH6Lo6h3iasJKWDs2F8TkW2UKf3s15C8PMGuVfgBn",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "flash-earn",
  name: "Earn",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
