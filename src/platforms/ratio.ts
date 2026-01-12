import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "ratio",
  name: "Ratio",
  links: {
    website: "https://www.ratio.finance/",
  },
  tags: ["dapp"],
  isDeprecated: true,
  platformToken: "ratioMVg27rSZbSvBopUvsdrGUzeALUfFma61mpxc8J",
  tokens: ["USDrbBQwQbQ2oWHUPfA8QBHcyVxKUq1xHyXsSLKdUq2"],
};

const mainContract = {
  name: "Main",
  address: "RFLeGTwFXiXXETdJkZuu9iKgXNkYbywLpTu1TioDsDQ",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
