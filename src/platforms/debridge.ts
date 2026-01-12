import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "debridge",
  name: "deBridge",
  description:
    "Cross-chain interoperability and liquidity transfer protocol that allows the decentralized transfer of arbitrary data and assets between various blockchains.",
  defiLlamaId: "debridge",
  links: {
    website: "https://debridge.finance/",
    discord: "https://discord.gg/debridge",
    telegram: "https://t.me/deBridge_finance",
    twitter: "https://x.com/deBridgeFinance",
    github: "https://github.com/debridge-finance/",
    documentation: "https://docs.debridge.finance/",
  },
  platformToken: "DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5",
  tags: ["tool", "bridge", "dapp"],
};

const transferContract = {
  name: "DeBridge",
  address: "DEbrdGj3HsRsAzx6uH4MKyREKxVAfBydijLUF3ygsFfh",
  networkId: NetworkId.solana,
};

const aidropContract = {
  name: "Airdrop",
  address: "DBrLFG4dco1xNC5Aarbt3KEaKaJ5rBYHwysqZoeqsSFE",
  networkId: NetworkId.solana,
};

const vaultContract = {
  name: "Vault",
  address: "DeDRoPXNyHRJSagxZBBqs4hLAAM1bGKgxh7cyfuNCBpo",
  networkId: NetworkId.solana,
};

const sourceContract = {
  name: "Bridge",
  address: "src5qyZHqTqecJV4aY6Cb6zDZLMDzrDKKezs22MPHr4",
  networkId: NetworkId.solana,
};

const destContract = {
  name: "Bridge",
  address: "dst5MGcFPoBeREFAA5E3tU5ij8m5uVYwkzkSAbsLbNo",
  networkId: NetworkId.solana,
};

export const transferService: ServiceRaw = {
  id: `${platform.id}-transfer`,
  name: "Transfer",
  platformId: platform.id,
  contractsRaw: [transferContract],
  link: "https://app.debridge.finance/",
  description:
    "Cross-chain asset transfer service enabling token bridging between blockchains with native liquidity and fast finality.",
};

export const vaultService: ServiceRaw = {
  id: `${platform.id}-vault`,
  name: "Vault",
  platformId: platform.id,
  contractsRaw: [vaultContract],
  description:
    "Liquidity vault holding bridged assets, enabling capital-efficient cross-chain transfers without wrapped token overhead.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [aidropContract],
};

export const dlnService: ServiceRaw = {
  id: `${platform.id}-dln`,
  name: "DLN",
  platformId: platform.id,
  contractsRaw: [sourceContract, destContract],
  link: "https://dln.trade/",
  description:
    "Decentralized Liquidity Network providing limit order cross-chain trading with guaranteed rates and MEV protection through solver competition.",
};

export const services: ServiceRaw[] = [
  transferService,
  vaultService,
  airdropService,
  dlnService,
];
