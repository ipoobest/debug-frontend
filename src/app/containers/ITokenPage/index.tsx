/**
 *
 * WalletPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../locales/i18n';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { UserAssets } from '../../components/UserAssets';
//import { TopUpHistory } from '../../components/TopUpHistory';

export function ITokenPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t(translations.walletPage.meta.title)}</title>
        <meta
          name="description"
          content={t(translations.walletPage.meta.description)}
        />
      </Helmet>
      <Header />
      <div className="container">
        <section>
          <div className="d-flex align-items-center justify-content-start mb-3">
            <h2 className="flex-shrink-0 flex-grow-0 mr-3 page-title">
              IToken
            </h2>
          </div>
          <div className="jrepo-border jrepo-container">
            <p className="p-3 text-body-style">
              Lend out your crypto and receive
              <span style={{ color: '#0665c7' }}> iTokens</span> (interest
              earning tokens) which appreciate in value the longer you hold
              them. <br />
              <br />
              <b>Leverage your earnings:</b> receive BGOV rewards by staking
              your iTokens in our farms.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
