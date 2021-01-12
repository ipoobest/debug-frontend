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
    "medianizer": "0xa33606b1eA54134957e14E4eF998e0Fc3cbE34Bd",
    "mocState": "0x428C52BEFD7fC8620d0984641bd152818f6F2Bfb",
    "sovrynProtocol": "0xAC3F38F5cb0C3dCBe18434ECe345CEC30ac957E7",
    "PriceFeeds": "0x7e81FCC121E3C77768dFBCeae73221A1cdf036B7",
    "WRBTC": "0xD11bF1a5C8c0D1b08C0c62d21665dA5ed3a73a35",
    "BUSD": "0x3577E7F05cb427698969DBcF85da93f36D973E4D",
    "GOLD": "0x14Da9d927814660F9570dDD9b13442FeDEF8B6b1",
    "JFIN": "0x58916F7AeE5E3E6aa29F0E34d645420fC9E9bBEF",
    "LoanTokenLogicStandard": "0xce3810D76FdC025c5E9Dc1fd41F7Aa8E96f8FE4a"
}
BUSD
{
    "mocStateAddress": "0x22FD1506E02F93D9F9cB4277eeC510FD07671359",
    "sovrynProtocol": "0xAC3F38F5cb0C3dCBe18434ECe345CEC30ac957E7",
    "loanToken": "0x76cf94fcafbe03E02082FcF812ce5e0E5ffB4203",
    "TokenPriceFeed": "0x3c744BFD30E7f1FEac6516a066B4fC9229C34D5E"
}
JFIN
{
    "mocStateAddress": "0xdEb2c320AF1173c1d272b63531dF66427e5C257E",
    "sovrynProtocol": "0xAC3F38F5cb0C3dCBe18434ECe345CEC30ac957E7",
    "loanToken": "0x0b401ea6556e5d49182b9BA8A755b82203C8aa1e",
    "TokenPriceFeed": "0xF2896a7baa618536827803E721ba457EBC5006Aa"
}
GOLD
{
    "mocStateAddress": "0x0857D15D54eb66fB41B48D8e36218290Efa28b5c",
    "sovrynProtocol": "0xAC3F38F5cb0C3dCBe18434ECe345CEC30ac957E7",
    "loanToken": "0x3E2f4EaBA784756C0130FF8694d9461823C0D424",
    "TokenPriceFeed": "0x16d8D99dBCF85CdeaFee4344583507A6525f7E4c"
}


*/
export const contracts = {
  sovrynProtocol: {
    address: '0xAC3F38F5cb0C3dCBe18434ECe345CEC30ac957E7',
    abi: bzxAbi,
    blockNumber: 4613455,
  },
  priceFeed: {
    address: '0x7e81FCC121E3C77768dFBCeae73221A1cdf036B7',
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
    address: '0xD11bF1a5C8c0D1b08C0c62d21665dA5ed3a73a35',
    abi: abiTestWBRTCToken,
    blockNumber: 4613443,
  },
  BTC_lending: {
    address: '0xeAB0644D8b2335D2cE37D0f7da52B2Be9C60AF52',
    abi: LoanTokenLogicWrbtc,
    blockNumber: 4613527,
  },
  BUSD_token: {
    address: '0x3577E7F05cb427698969DBcF85da93f36D973E4D',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  BUSD_lending: {
    address: '0x76cf94fcafbe03E02082FcF812ce5e0E5ffB4203',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },
  JFIN_token: {
    address: '0x58916F7AeE5E3E6aa29F0E34d645420fC9E9bBEF',
    abi: TestTokenABI,
    blockNumber: 4862414,
  },
  JFIN_lending: {
    address: '0x0b401ea6556e5d49182b9BA8A755b82203C8aa1e',
    abi: LoanTokenLogicStandard,
    blockNumber: 4862414,
  },
  GOLD_token: {
    address: '0x14Da9d927814660F9570dDD9b13442FeDEF8B6b1',
    abi: TestTokenABI,
    blockNumber: 4865634,
  },
  GOLD_lending: {
    address: '0x3E2f4EaBA784756C0130FF8694d9461823C0D424',
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
