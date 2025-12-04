import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "mintech",
  name: "Mintech",
  links: {
    website: "https://www.mintechbots.com/",
    discord: "https://t.co/f9eKBmczlm",
    twitter: "https://x.com/mintechbots",
    documentation:
      "https://mintechbots.gitbook.io/mintech-guide/getting-started/welcome",
  },
  tags: ["tool"],
};

const contract = {
  name: "Router",
  address: "minTcHYRLVPubRK8nt6sqe2ZpWrGDLQoNLipDJCGocY",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-bot`,
  name: "Bot",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
