import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "macaron",
  name: "Macaron",
  description:
    "Macaron is a mining protocol that integrates both auction-based and block-based mining models.",
  tags: ["tool"],
  links: {
    website: "https://www.macaron.bid/",
    telegram: "https://t.me/macaron_bid",
    twitter: "https://x.com/macaron_bid",
    documentation: "https://docs.macaron.bid/",
  },
  platformToken: "8UiPofjkbjqTqrymz4VY3wXxMcPjFuyq3Psofekymaca",
};

const v3Contract = {
  name: "V3",
  address: "BidUuhFU1wyjgmpTv4YMQrqzersavZLJRnsgpw3i4k88",
  networkId: NetworkId.solana,
};

export const v3Service: ServiceRaw = {
  id: `${platform.id}-v3`,
  name: "Mining",
  platformId: platform.id,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [v3Service];
