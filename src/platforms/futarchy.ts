import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "futarchy",
  name: "MetaDAO",
  description:
    "MetaDAO is a DAO that uses prediction markets to make decisions.",
  links: {
    website: "https://metadao.fi/",
    discord: "https://discord.com/invite/metadao",
    twitter: "https://x.com/MetaDAOProject",
    github: "https://github.com/metaDAOproject",
    documentation: "https://docs.metadao.fi/",
  },
  tokens: ["METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr"],
  tags: ["dapp", "dao"],
};

const contract = {
  name: "Futarchy DAO",
  address: "autoQP9RmUNkzzKRXsMkWicDVZ3h29vvyMDcAYjCxxg",
  networkId: NetworkId.solana,
};

const launchpadContract = {
  name: "Launchpad",
  address: "AfJJJ5UqxhBKoE3grkKAZZsoXDE9kncbMKvqSHGsCNrE",
  networkId: NetworkId.solana,
};

const conditionalContract = {
  name: "Conditional Vault",
  address: "VLTX1ishMBbcX3rdBWGssxawAo1Q2X2qxYFYqiGodVg",
  networkId: NetworkId.solana,
};

const ammContract = {
  name: "AMM",
  address: "AMMyu265tkBpRW21iGQxKGLaves3gKm2JcMUqfXNSpqD",
  networkId: NetworkId.solana,
};

export const launchpadService: ServiceRaw = {
  id: "futarchy-launchpad",
  name: "Launchpad",
  platformId: platform.id,
  contractsRaw: [launchpadContract],
};

export const services: ServiceRaw[] = [launchpadService];
