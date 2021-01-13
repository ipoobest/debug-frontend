/**
 *
 * Footer
 *
 */
import React, { useEffect } from 'react';
import { Trans } from 'react-i18next';
import { translations } from 'locales/i18n';
import { LanguageToggle } from '../../components/LanguageToggle';

export function Footer() {
  //const [setHasMatomo] = useState(false);

  useEffect(() => {
    //setHasMatomo(window.hasOwnProperty('Matomo'));
  }, []);

  return (
    <footer className="mt-3">
      <div className="container py-3">
        <div className="d-flex flex-row justify-content-between align-items-center text-white">
          <h6>
            <Trans
              i18nKey={translations.footer.title}
              components={[<strong></strong>]}
            />
          </h6>
          <div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
