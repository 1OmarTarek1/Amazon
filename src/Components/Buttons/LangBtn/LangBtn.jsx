import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoEarth } from 'react-icons/io5';
import './LangBtn.css';

const LangBtn = ({ setIsLoading, txt }) => {
    const { i18n } = useTranslation();

    const toggleLanguage = async () => { 
        // all comments about when translate is finished the loading will go
        
        // setIsLoading(true);
        // Add a fake delay before changing the language
        // await new Promise(resolve => setTimeout(resolve, 500));

        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        
        await i18n.changeLanguage(newLanguage);
        localStorage.setItem('selectedLanguage', newLanguage); 
        // setIsLoading(false);

        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    };

    return (
        <div className='langBtnWrapper'>
            <button 
            className='langBtn' 
            onClick={toggleLanguage}
            >
                <IoEarth />

                { txt 
                ? (
                    <div className="" style={{
                        flex:"1 100%",
                        width:"100%",
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}>
                        <span>{txt}</span>
                        <span>
                            ( {i18n.language === 'en' ? 'Ar' : 'En'} )
                        </span>
                    </div>
                )
                : (                    
                    <span>
                        {i18n.language === 'en' ? 'Ar' : 'En'}
                    </span>
                )}
            </button>
        </div>
    );
}

export default LangBtn;
