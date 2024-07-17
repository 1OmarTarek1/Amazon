import React from 'react';
import { useTranslation } from 'react-i18next';
import './HomeHeaderSec.css';

const HomeHeaderSec = () => {
  const { t } = useTranslation();

  return (
    <header className="header-container">
      <div className="header-background">
        <div className="header-overlay">
          <div className="header-content">
            <div className="text-content">
              <h1 className="homeTitle mb-3">
                {t('homeHeader.headingTxt')}
              </h1>
              <h4 className="homeSubTitle mb-3">
                {t('homeHeader.subHeadingTxt')}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeaderSec;
