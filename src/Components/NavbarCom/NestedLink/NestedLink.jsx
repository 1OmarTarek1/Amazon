import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NestedLinkBox } from '../../../Components';
import { IoAppsSharp } from "react-icons/io5";
import './NestedLink..css'





const NestedLink = () => {
    const { t } = useTranslation();

    const [nestedLinkBox, setNestedLinkBox] = useState(false);
    const location = useLocation();

    const isActive = location.pathname.startsWith("/Products");

    const handleProBx = () => {
        setNestedLinkBox(!nestedLinkBox);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            let NestedLink = document.querySelector(".NestedLink ");
            const nestedLinkBox = document.querySelector('.nestedLinkBox');
            if (
                nestedLinkBox &&
                !nestedLinkBox.contains(event.target) &&
                !NestedLink.contains(event.target)
            ) {
                setNestedLinkBox(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        let BoxLinks = document.querySelectorAll(".bxLink");
        let clsBx = () => {
            setNestedLinkBox(false);
        };
        BoxLinks.forEach(BoxLink => {
            BoxLink.addEventListener('click', clsBx);
        });

        return () => {
            BoxLinks.forEach(BoxLink => {
                BoxLink.removeEventListener('click', clsBx);
            });
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [nestedLinkBox]);

    return (
        <>
                <div
                className={`NestedLink ${isActive ? 'active' : ''}`}
                onClick={handleProBx}
                style={{ cursor: "pointer" }}
            >
                <div 
                className={isActive ? "navLink active" : "navLink "}
                // tabIndex="0"
                >
                    <IoAppsSharp />
                    <span>
                        {t('navbar.products')}
                    </span>
                </div>
            </div>

            {/* Profile Box */}
            <NestedLinkBox 
            nestedLinkBox={nestedLinkBox} 
            setNestedLinkBox={setNestedLinkBox} 
            />
            </>
    )
}

export default NestedLink