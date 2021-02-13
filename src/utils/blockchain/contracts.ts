/**
 * Do not import this file directly.
 * Use getContract(contractName) helper
 * @example getContract('sovrynProtocol');
 */

import bzxAbi from './abi/bzxAbi.json';
import priceFeedsAbi from './abi/priceFeedAbi.json';
//import LiquidityPoolV2Converter from './abi/LiquidityPoolV2Converter.json';
import tokenAbi from './abi/abiTestToken.json';
import abiTestWBRTCToken from './abi/abiTestWBRTCToken.json';
import LoanTokenLogicWrbtc from './abi/LoanTokenLogicWrbtc.json';
import LoanTokenLogicStandard from './abi/LoanTokenLogicStandard.json';
import TestTokenABI from './abi/abiTestToken.json';
import SwapNetworkABI from './abi/SovrynSwapNetwork.json';
import ConverterRegistryABI from './abi/ConverterRegistry.json';
import RBTCWrapperProxy from './abi/RBTCWrapperProxy.json';

export const contracts = {
  sovrynProtocol: {
    address: '0xAB02DcA711453aC997e397fdc4b93Bd0Aac9f7d4',
    abi: bzxAbi,
    blockNumber: 4613455,
  },
  BTCWrapperProxy: {
    address: '0x78E7e79F1acc1f57a3291d5BfA8436A0771C1800',
    abi: RBTCWrapperProxy,
    blockNumber: 2838500,
  },
  priceFeed: {
    address: '0x1625C385fa04A59FA513C5e2D74Cfab8dCC8734A',
    abi: priceFeedsAbi,
    blockNumber: 4613459,
  },
  swapNetwork: {
    address: '0x79D7554a96d7bB2e63eEf43584d4E6235030f90E',
    abi: SwapNetworkABI,
    blockNumber: 4613467,
  },
  converterRegistry: {
    address: '0x6f76921e800746c4f007dDC35Ca931D82702bD86',
    abi: ConverterRegistryABI,
    blockNumber: 4640122,
  },
  BTC_token: {
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    abi: abiTestWBRTCToken,
    blockNumber: 4613443,
  },
  BTC_lending: {
    address: '0xeAB0644D8b2335D2cE37D0f7da52B2Be9C60AF52',
    abi: LoanTokenLogicWrbtc,
    blockNumber: 4613527,
  },
  BUSDJ_token: {
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSDJ_lending: {
    address: '0x7400bbaE02C412c1be9C1e7D177e2b1B76494717',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },
  BUSD_token: {
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSD_lending: {
    address: '0xbb7Bc16196815617e127cB2cE0a5a95381Da4AC0',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },

  JFIN_token: {
    address: '0x8ad88bc768048596f58cd6572dbab979274faccb',
    abi: TestTokenABI,
    blockNumber: 4862414,
  },
  JFIN_lending: {
    address: '0xddF7F0c356381EF95731e7D2dD565A3b2d2A6982',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  GASH_token: {
    address: '0xea080f4bb819a54cf47a0b10771476f548738287',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  GASH_lending: {
    address: '0x1F57413441Ff0e3C18C6E4D9Cf340ecAdb5e0d4c',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613566,
  },
  ETH_token: {
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  ETH_lending: {
    address: '0xA23fcf32Ad8839Cd9961dDF73C72ed796C8b5845',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  ...(process.env.REACT_APP_WHITELIST_TOKEN &&
    process.env.REACT_APP_WHITELIST === 'true' && {
      whitelistToken: {
        address: process.env.REACT_APP_WHITELIST_TOKEN,
        abi: tokenAbi,
        blockNumber: 1218844,
      },
    }),
};
