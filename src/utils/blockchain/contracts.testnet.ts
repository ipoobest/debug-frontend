/**
 * Do not import this file directly.
 * Use getContract(contractName) helper
 * @example getContract('jrepoProtocol');
 */

import bzxAbi from './abi/bzxAbi.json';
import priceFeedsAbi from './abi/priceFeedAbi.json';
//import LiquidityPoolV2Converter from './abi/LiquidityPoolV2Converter.json';
//import RBTCWrapperProxy from './abi/RBTCWrapperProxy.json';
import tokenAbi from './abi/abiTestToken.json';
import TestTokenABI from './abi/abiTestToken.json';
import abiTestWBRTCToken from './abi/abiTestWBRTCToken.json';
import LoanTokenLogicWrbtc from './abi/LoanTokenLogicWrbtc.json';
import LoanTokenLogicStandard from './abi/LoanTokenLogicStandard.json';
import SwapNetworkABI from './abi/JrepoSwapNetwork.json';
import ConverterRegistryABI from './abi/ConverterRegistry.json';
/*
 {
 "WBASE":"0x8ddf89C558477423B27bFA74d51215a170b24D27",
 "BUSD":"0x0D1D93885607471394489E0d24236B2cE99e5604",
 "JFIN":"0x4417AD334d8Fa83bC6D26e6E0d5F5Dda748C1cd7",
 "GASH":"0x8986AC97a5509C22A66e203F392eC6db793b42BE",
 "mocOracleAddress":"0x271163DBd858Ba7ce418d25A5e321599c50797ae",
 "tfiOracleAddress":"0x9b3C4D60394762d33E01DE8612De3EFE09C9a469",
 "GoldOracleAddress":"0xCFB158E5497ef91aF95d5a8202B210021324d83a",
 "JFINOracleAddress":"0xBc79A44bBEc5328E56b083203c62CB21d21659Ad",
 "thaifiProtocol":"0xf2883ff1f77c22Ac56DA3576f535009c63DDea4D",
 "PriceFeeds":"0x4b38D40a439CD002062D9ce8f62eCc6c8a9299Fa",
 "LoanTokenLogicStandard":"0x54207FE64a273AE410E74f7B4376D170B9F4c0EC"
 }
 {
 "WBASE":"0x8ddf89C558477423B27bFA74d51215a170b24D27",
 "BUSD":"0x0D1D93885607471394489E0d24236B2cE99e5604",
 "JFIN":"0x4417AD334d8Fa83bC6D26e6E0d5F5Dda748C1cd7",
 "GASH":"0x8986AC97a5509C22A66e203F392eC6db793b42BE",
 "mocOracleAddress":"0x271163DBd858Ba7ce418d25A5e321599c50797ae",
 "tfiOracleAddress":"0x9b3C4D60394762d33E01DE8612De3EFE09C9a469",
 "GoldOracleAddress":"0xCFB158E5497ef91aF95d5a8202B210021324d83a",
 "JFINOracleAddress":"0xBc79A44bBEc5328E56b083203c62CB21d21659Ad",
 "thaifiProtocol":"0xf2883ff1f77c22Ac56DA3576f535009c63DDea4D",
 "PriceFeeds":"0x4b38D40a439CD002062D9ce8f62eCc6c8a9299Fa",
 "LoanTokenLogicStandard":"0x54207FE64a273AE410E74f7B4376D170B9F4c0EC",
 "iBUSD-J":"0xb6fC78DaB4eD632373Df229Fe95cBb10a9e46F30",
 "iBUSD_PriceFeed":"0x54597495d12Af0D36d2F6CBc7799f56CE1a92f52",
 "iBUSD":"0xF4E5764faB842955C0F6Ed84882Bd4Be54b5BD72",
 "iJFIN":"0xe4FDedeA342743f981ae254dE524Bd80345beC02",
 "iJFIN_PriceFeed":"0xBc79A44bBEc5328E56b083203c62CB21d21659Ad",
 "iGASH":"0xff129D68FB56210e984649A85765dA762B6473E9",
 "iGASH_PriceFeed":"0xCFB158E5497ef91aF95d5a8202B210021324d83a"
 }
 {
 "WBASE":"0x8ddf89C558477423B27bFA74d51215a170b24D27",
 "BUSD":"0x0D1D93885607471394489E0d24236B2cE99e5604",
 "JFIN":"0x4417AD334d8Fa83bC6D26e6E0d5F5Dda748C1cd7",
 "GASH":"0x8986AC97a5509C22A66e203F392eC6db793b42BE"
 }
 */
export const contracts = {
  jrepoProtocol: {
    address: '0xf2883ff1f77c22Ac56DA3576f535009c63DDea4D',
    abi: bzxAbi,
    blockNumber: 4613455,
  },
  priceFeed: {
    address: '0x41D4A43207F75C96fa65044230668642e4f630aB',
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
    address: '0x00993649DDeCc3A05EA58185ff7293470F68Fd38',
    abi: abiTestWBRTCToken,
    blockNumber: 4613443,
  },
  BTC_lending: {
    address: '0xeAB0644D8b2335D2cE37D0f7da52B2Be9C60AF52',
    abi: LoanTokenLogicWrbtc,
    blockNumber: 4613527,
  },
  BUSDJ_token: {
    address: '0x7749b99533F8255D3Ba173511cA3Aa74a1C8A07d',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSDJ_lending: {
    address: '0xBAEED624F64E528A557B9753d5e1dA01E965A27f',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },
  BUSD_token: {
    address: '0x0D1D93885607471394489E0d24236B2cE99e5604',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSD_lending: {
    address: '0xF4E5764faB842955C0F6Ed84882Bd4Be54b5BD72',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },

  JFIN_token: {
    address: '0x4417AD334d8Fa83bC6D26e6E0d5F5Dda748C1cd7',
    abi: TestTokenABI,
    blockNumber: 4862414,
  },
  JFIN_lending: {
    address: '0xf83C3162A21CE95FD2cab50Ce90cC760Fd55607d',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  GASH_token: {
    address: '0x8986AC97a5509C22A66e203F392eC6db793b42BE',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  GASH_lending: {
    address: '0xff129D68FB56210e984649A85765dA762B6473E9',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613566,
  },
  ETH_token: {
    address: '0xc35b23d78B5042f734e8DfBF1F94E29B8F3C4d59',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  ETH_lending: {
    address: '0x2517D6d7Ef47d975C5BD083B978808b37B56f90b',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  BAND_token: {
    address: '0x254b759AC5dc140d62e6bc42b7c7C7f9C82a20d2',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  BAND_lending: {
    address: '0x526aE42f26e65382F85D19b97FD82FCe33a61115',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  ALPHA_token: {
    address: '0xE7C75241Ec97a93b2E5f24845Bf3B9af196030e3',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  ALPHA_lending: {
    address: '0x3daCD1a25c1ee58821cc52250fFA2D323491FAe0',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  DOGE_token: {
    address: '0xd6308F601166573e1e15f0fe7667B589a3fA8361',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  DOGE_lending: {
    address: '0x1b2Eb82C21689bFB38813b5cD3eBa81256AD72BC',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  USDT_token: {
    address: '0x104F81de940F3a725c23cF615DBdCe3F37D80979',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  USDT_lending: {
    address: '0x14c2594E1Cd5Dde171aDfD2b948E67FF83495611',
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
