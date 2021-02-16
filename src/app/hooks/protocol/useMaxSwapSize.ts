import { useCacheCallWithValue } from '../useCacheCallWithValue';

export function useMaxSwapSize() {
  return useCacheCallWithValue('jrepoProtocol', 'maxSwapSize', '0');
}
