import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router  } from 'react-router-dom';
import i18n from './Components/i18n/i18n';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavbarSec, SidebarSec, FooterSec } from './Sections';
import { DTitle, ScrollToTop, ToTopBtn, WebRoutes, Loading } from './Components';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);
  

  return (
    <Router basename='Amazon'>
    <I18nextProvider i18n={i18n}>
      {isLoading 
      ? (
        <Loading 
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        />
      ) 
      : (
        <>
          <Loading 
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          />
          <DTitle />

        <div className="MAIN-WRAPPER">          
            <NavbarSec 
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            />
            <SidebarSec setIsLoading={setIsLoading}/>
              <WebRoutes />
            <FooterSec />
            

            <ToTopBtn />
            <ScrollToTop />
        </div>
        </>
      )}

    </I18nextProvider>
    </Router>
  );
}

export default App;

