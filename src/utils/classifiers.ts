import { TxType } from '../store/global/transactions-store/types';

export const chains = {
  mainnet: 56,
  testnet: 97,
};

export const currentNetwork =
  String(process.env.REACT_APP_NETWORK).toLowerCase() || 'mainnet';

export const currentChainId = chains[currentNetwork];

export const blockExplorers = {
  56: 'https://bscscan.com/',
  97: 'https://testnet.bscscan.com/',
};

export const networkNames = {
  56: 'BSC Mainnet',
  97: 'BSC Testnet',
};

export const rpcNodes = {
  56: 'https://bsc-dataseed.binance.org/',
  // 30: 'https://mainnetbackup.jrepo.app/rpc',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
};

export const readNodes = {
  // 56: 'wss://bsc-ws-node.nariox.org:443',
  // 56: 'https://bsc-dataseed4.binance.org/',
  56: 'wss://gifted-euclid:rope-cabana-drew-garden-party-busboy@ws-nd-445-637-642.p2pify.com',
  // 30: 'wss://mainnetbackup.jrepo.app/ws',
  97: 'wss://ws-bsc-testnet.dome.cloud/',
  // 30: 'https://public-node.rsk.co',
  // 31: 'https://public-node.testnet.rsk.co',
};

export const fastBtcApis = {
  56: 'https://fastbtc.jrepo.app/',
  97: 'https://testnet.jrepo.app/fastbtc',
};

export const ethGenesisAddress = '0x0000000000000000000000000000000000000000';

export const gasLimit = {
  [TxType.TRADE]: 17500000,
  [TxType.ADD_LIQUIDITY]: 2750000,
  [TxType.REMOVE_LIQUIDITY]: 4500000,
  [TxType.BORROW]: 2000000,
  [TxType.CONVERT_BY_PATH]: 5800000,
  [TxType.LEND]: 500000,
};
