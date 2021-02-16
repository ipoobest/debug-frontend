import { useCallback, useEffect, useState } from 'react';
import { Asset } from 'types/asset';
import {
  getAmmContractName,
  getPoolTokenContractName,
  getTokenContract,
} from 'utils/blockchain/contract-helpers';
import TokenAbi from 'utils/blockchain/abi/abiTestToken.json';
import { ethGenesisAddress } from 'utils/classifiers';
import { Jrepo } from 'utils/jrepo';
import { LiquidityPoolDictionary } from 'utils/dictionaries/liquidity-pool-dictionary';
import { useCacheCallWithValue } from '../useCacheCallWithValue';

export function usePoolToken(pool: Asset, asset: Asset) {
  const { value, loading, error } = useCacheCallWithValue(
    getAmmContractName(pool),
    'poolToken',
    ethGenesisAddress,
    getTokenContract(asset).address,
  );

  useEffect(() => {
    if (value !== ethGenesisAddress) {
      console.log(`${pool}_${asset} poolToken: `, value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return { value: useLocalPoolToken(pool, asset), loading, error };
}

export function useLocalPoolToken(pool: Asset, asset: Asset) {
  const getPoolToken = useCallback(() => {
    return LiquidityPoolDictionary.get(pool)
      ?.getPoolAsset(asset)
      ?.getContractAddress() as string;
  }, [pool, asset]);

  const [poolToken, setPoolToken] = useState(getPoolToken());

  useEffect(() => {
    const value = getPoolToken();
    if (value && value !== ethGenesisAddress) {
      const contractName = getPoolTokenContractName(pool, asset);
      if (
        !Jrepo.writeContracts.hasOwnProperty(contractName) &&
        Jrepo.writeContracts[contractName]?.options?.address.toLowerCase() !==
          value.toLowerCase()
      ) {
        Jrepo.addWriteContract(contractName, {
          address: value,
          abi: TokenAbi as any,
        });
      }
      if (
        !Jrepo.contracts.hasOwnProperty(contractName) &&
        Jrepo.contracts[contractName]?.options?.address.toLowerCase() !==
          value.toLowerCase()
      ) {
        Jrepo.addReadContract(contractName, {
          address: value,
          abi: TokenAbi as any,
        });
      }
    }
    setPoolToken(value);
  }, [pool, asset, getPoolToken]);

  return poolToken;
}
