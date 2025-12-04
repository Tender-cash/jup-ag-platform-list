import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "rain",
  name: "Rain",
  description:
    "RainFi is a peer-to-peer (P2P) lending protocol built on the Solana blockchain, offering innovative ways for users to access and utilize financial resources.",
  defiLlamaId: "rain.fi",
  links: {
    website: "https://rain.fi/",
    discord: "https://discord.gg/rainfi",
    twitter: "https://twitter.com/RainFi_",
    github: "https://github.com/rain-foundation",
    medium: "https://medium.com/@rainfi_",
    documentation: "https://docs.rain.fi/",
  },
  tags: ["dapp"],
};

const contractNftLending = {
  name: "NFT Lending",
  address: "rNfTQD84kwMbcRpWpLR92BVmxbuwrZc3o5HTauAZiXs",
  networkId: NetworkId.solana,
};

const contractDefiLending = {
  name: "Defi Lending",
  address: "rDeFiHPjHZRLiz4iBzMw3zv6unZs4VwdU6qQcVd3NSK",
  networkId: NetworkId.solana,
};

const contractBank = {
  name: "Vaults",
  address: "rain2M5b9GeFCk792swkwUu51ZihHJb3SUQ8uHxSRJf",
  networkId: NetworkId.solana,
};

const liquidContract = {
  name: "Liquid",
  address: "wJUPXhGwC88LZeG1DXaYing3WB1Q4YvwJcK77bidNGv",
  networkId: NetworkId.solana,
};

export const defiService: ServiceRaw = {
  id: "rain-defi-lending",
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contractDefiLending],
};

export const nftService: ServiceRaw = {
  id: "rain-nft-lending",
  name: "NFT Lending",
  platformId: platform.id,
  contractsRaw: [contractNftLending],
};

export const vaultsService: ServiceRaw = {
  id: "rain-vaults",
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [contractBank],
};

export const liquidService: ServiceRaw = {
  id: "rain-vaults-liquid",
  name: "Liquid",
  platformId: platform.id,
  contractsRaw: [liquidContract],
};

export const services: ServiceRaw[] = [
  defiService,
  nftService,
  vaultsService,
  liquidService,
];
