import i18n from './Components/i18n/i18n';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavbarSec, SidebarSec, FooterSec } from './Sections';
import { DTitle, ScrollToTop, ToTopBtn, WebRoutes, Loading, LoadingSec } from './Components';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSec, setIsLoadingSec] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir); 
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // [i18n.language]
  

  return (
    // <>
    //   { isLoading
    //   ? (
    //     <Loading 
    //     isLoading={isLoading}
    //     setIsLoading={setIsLoading}
    //     />
    //   )
    //   : (
          <>
            <DTitle />
            <div className="MAIN-WRAPPER" style={{position:"relative"}}>       
                <LoadingSec 
                    isLoadingSec={isLoadingSec}
                    setIsLoadingSec={setIsLoadingSec}
                />
              <NavbarSec 
              isLoadingSec={isLoadingSec}
              setIsLoading={setIsLoading}
              setIsLoadingSec={setIsLoadingSec}
              toggleSidebar={toggleSidebar}
              />
              <SidebarSec 
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggleSidebar={toggleSidebar}
              setIsLoading={setIsLoading}
              />
                <WebRoutes />
              <FooterSec />
              

              <ToTopBtn />
              <ScrollToTop />
            </div>
          </>
    //   )
    //   }
    // </>
  );
}

export default App;

