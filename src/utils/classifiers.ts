import { TxType } from '../store/global/transactions-store/types';

export const chains = {
  mainnet: 56,
  testnet: 97,
};

export const currentNetwork =
  String(process.env.REACT_APP_NETWORK).toLowerCase() || 'mainnet';

export const currentChainId = chains[currentNetwork];

export const blockExplorers = {
  56: 'https://explorer.rsk.co',
  97: 'https://testnet.bscscan.com/',
  btc_30: 'https://live.blockcypher.com/btc',
  btc_31: 'https://live.blockcypher.com/btc-testnet',
};

export const networkNames = {
  56: 'BSC Mainnet',
  97: 'BSC Testnet',
};

export const rpcNodes = {
  56: 'https://mainnet.sovryn.app/rpc',
  // 30: 'https://mainnetbackup.sovryn.app/rpc',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
};

export const readNodes = {
  56: 'wss://mainnet.sovryn.app/ws',
  // 30: 'wss://mainnetbackup.sovryn.app/ws',
  97: 'wss://ws-bsc-testnet.dome.cloud/',
  // 30: 'https://public-node.rsk.co',
  // 31: 'https://public-node.testnet.rsk.co',
};

export const fastBtcApis = {
  56: 'https://fastbtc.sovryn.app/',
  97: 'https://testnet.sovryn.app/fastbtc',
};

export const ethGenesisAddress = '0x0000000000000000000000000000000000000000';

export const gasLimit = {
  [TxType.TRADE]: 17500000,
  [TxType.ADD_LIQUIDITY]: 2750000,
  [TxType.REMOVE_LIQUIDITY]: 4500000,
  [TxType.BORROW]: 13000000,
  [TxType.CONVERT_BY_PATH]: 5800000,
  [TxType.LEND]: 2000000,
};
