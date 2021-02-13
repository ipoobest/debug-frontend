/**
 * Do not import this file directly.
 * Use getContract(contractName) helper
 * @example getContract('sovrynProtocol');
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
import SwapNetworkABI from './abi/SovrynSwapNetwork.json';
import ConverterRegistryABI from './abi/ConverterRegistry.json';
/*
{
    "WBASE": "0xF0Ab2d52283DAb94a1Db9Da99E528D686BC14dBd",
    "BUSD": "0xC8a19327f421FEe2bd991196A12c95DB7C3A7De9",
    "JFIN": "0xF8e0E07e21Cc6e5AAB3F09359cBBDE1132FF9b83",
    "GASH": "0x3778D12096117eEcdb18fCFd0E45F4EAbf4E0Af8",
    "mocOracleAddress": "0x884e737F3E155781Bcb7aa3b5d68F9c111c0E20D",
    "tfiOracleAddress": "0x60F1c8D5337a3290214293018E0a498bF6e7293B",
    "GoldOracleAddress": "0xCB93d6dA970485d551e89C4B7460372590506D87",
    "JFINOracleAddress": "0x6E6a75E8e8aA47466a997E53b885e2c6F81Be722",
    "thaifiProtocol": "0x279Eb1BDBb3fb52e0DfDc50e6962f3773eCd27d8",
    "PriceFeeds": "0xFB4b1028CFD531dC53fF03BFc418BB524c9A1f4C",
    "LoanTokenLogicStandard": "0x4f95b19a31599B1Cc5bb673bE39940A61aA9d60E",
    "iBUSD": "0x3861b023e7a199c73f803888896949Bbb9Ba0DbA",
    "iBUSD_PriceFeed": "0xDc5a315C84CF6062608b1266636B90c054b63993",
    "iJFIN": "0xF1572F7090e075336ac6caAd6B1D97e670807241",
    "iJFIN_PriceFeed": "0x6E6a75E8e8aA47466a997E53b885e2c6F81Be722",
    "iGASH": "0x60B7EE0eeC769c7E90285e5e42FB0B163E803D76",
    "iGASH_PriceFeed": "0xCB93d6dA970485d551e89C4B7460372590506D87"
}
*/
export const contracts = {
  sovrynProtocol: {
    address: '0x279Eb1BDBb3fb52e0DfDc50e6962f3773eCd27d8',
    abi: bzxAbi,
    blockNumber: 4613455,
  },
  priceFeed: {
    address: '0xFB4b1028CFD531dC53fF03BFc418BB524c9A1f4C',
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
    address: '0xF0Ab2d52283DAb94a1Db9Da99E528D686BC14dBd',
    abi: abiTestWBRTCToken,
    blockNumber: 4613443,
  },
  BTC_lending: {
    address: '0xeAB0644D8b2335D2cE37D0f7da52B2Be9C60AF52',
    abi: LoanTokenLogicWrbtc,
    blockNumber: 4613527,
  },
  BUSDJ_token: {
    address: '0xC8a19327f421FEe2bd991196A12c95DB7C3A7De9',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSDJ_lending: {
    address: '0x6A7d15Bd907f2C86EF806c85d43C2342B9944684',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },
  BUSD_token: {
    address: '0xC8a19327f421FEe2bd991196A12c95DB7C3A7De9',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSD_lending: {
    address: '0x3861b023e7a199c73f803888896949Bbb9Ba0DbA',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },

  JFIN_token: {
    address: '0xF8e0E07e21Cc6e5AAB3F09359cBBDE1132FF9b83',
    abi: TestTokenABI,
    blockNumber: 4862414,
  },
  JFIN_lending: {
    address: '0xF1572F7090e075336ac6caAd6B1D97e670807241',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  GASH_token: {
    address: '0x3778D12096117eEcdb18fCFd0E45F4EAbf4E0Af8',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  GASH_lending: {
    address: '0x60B7EE0eeC769c7E90285e5e42FB0B163E803D76',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613566,
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
