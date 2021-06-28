import { useCacheCall } from './useCacheCall';
import { useEffect, useState } from 'react';
import { ContractName } from '../../utils/types/contracts';

export function useCacheCallWithValue(
  contractName: ContractName,
  methodName: string,
  defaultValue: string | any = '0',
  ...args: any
) {
  // console.log('contract name', contractName);
  // console.log('methodName', methodName);
  // console.log('defaultValue', defaultValue);
  // console.log('args', ...args);
  const { value, loading, error } = useCacheCall(
    contractName,
    methodName,
    ...args,
  );

  // console.log('...value, loading, error', { value, loading, error });
  const [fixedValue, setFixedValue] = useState(
    value !== null ? value : defaultValue,
  );

  useEffect(() => {
    setFixedValue(value !== null ? value : defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, JSON.stringify(defaultValue)]);

  return { value: fixedValue, loading, error };
}
