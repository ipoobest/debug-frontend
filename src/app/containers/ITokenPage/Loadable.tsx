/**
 *
 * Asynchronously loads the component for WalletPage
 *
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import { PageSkeleton } from 'app/components/PageSkeleton';

export const ITokenPage = lazyLoad(
  () => import('./index'),
  module => module.ITokenPage,
  { fallback: <PageSkeleton /> },
);
