import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "amulet",
  name: "Amulet",
  links: {
    website: "https://amulet.org/",
    twitter: "https://x.com/AmuletProtocol",
  },
  tags: ["tool"],
  isDeprecated: true,
};

const contract = {
  name: "Core",
  address: "AFX6h67CCoqcJcoFbq12dabMLDruQ38U2nogpeU7ECLa",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
