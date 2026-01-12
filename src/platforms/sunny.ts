import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "sunny",
  name: "Sunny",
  links: {
    website: "https://x.com/SunnyAggregator",
    twitter: "https://x.com/SunnyAggregator",
  },
  tags: ["dapp"],
  platformToken: "SUNNYWgPQmFxe9wTZzNK7iPnJ3vYDrkgnxJRJm1s3ag",
  isDeprecated: true,
};

const poolContract = {
  name: "Pool",
  address: "SPQR4kT3q2oUKEJes2L6NNSBCiPW9SfuhkuqC9bp6Sx",
  networkId: NetworkId.solana,
};

export const poolService = {
  id: `${platform.id}-pool`,
  name: "Pool",
  platformId: platform.id,
  contractsRaw: [poolContract],
};

export const services = [poolService];
