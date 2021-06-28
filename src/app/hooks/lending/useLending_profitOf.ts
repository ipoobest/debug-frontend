import { Asset } from 'types/asset';
import { getLendingContractName } from 'utils/blockchain/contract-helpers';
import { useCacheCallWithValue } from '../useCacheCallWithValue';

export function useLending_profitOf(asset: Asset, address: string) {
  // console.log('getLendingContractName(asset),', getLendingContractName(asset));
  return useCacheCallWithValue(
    getLendingContractName(asset),
    'profitOf',
    '0',
    address,
  );
}
