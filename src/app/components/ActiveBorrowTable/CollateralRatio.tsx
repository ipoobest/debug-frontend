import React from 'react';

import { weiTo4 } from 'utils/blockchain/math-helpers';

interface Props {
  amount: string;
}

export function CollateralRatio({ amount }: Props) {
  const loading = false;
  return (
    <span className={`${loading && 'bp3-skeleton'}`}>
      {weiTo4(Number(amount) + 100 * 10 ** 18)}{' '}
      <span className="text-muted">%</span>{' '}
    </span>
  );
}
