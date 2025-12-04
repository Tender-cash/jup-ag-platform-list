import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "kyros",
  name: "Kyros",
  tags: ["dapp"],
  links: {
    website: "https://app.kyros.fi/",
    twitter: "https://x.com/kyrosfi",
  },
};

const contract = {
  name: "Airdrop",
  address: "MerKyPxu2fs6U1oqRbj5KVYApbFcAKzBWG8TDCeEpQ4",
  networkId: NetworkId.solana,
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [airdropService];
