import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LangBtn, ThemeBtn } from '../../../Components';
import { FaCircleHalfStroke, FaGear, FaCircleUser, FaCartShopping, FaBell, FaHeart } from 'react-icons/fa6';
import { IoLogOutOutline } from 'react-icons/io5';
import './ProfileBox.css';

const ProfileBox = ({ profileBx, setIsLoading }) => {
    const { t } = useTranslation();

    return (
        <div 
        className={profileBx ? "profileBox opened" : "profileBox"}
        style={ localStorage.getItem('selectedLanguage') === "en" 
            ? {
                right:"-10px"
            }
            : {
                right:"-125px"
            }
        }
        >
            <ul className="BoxContainer">
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/Profile"}>
                        <FaCircleUser />
                        <span>{t('navbar.profile')}</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/Notifications"}>
                        <FaBell />
                        <span>{t('navbar.notifications')}</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/MyShop"}>
                        <FaCartShopping />
                        <span>{t('navbar.shoppingCar')}</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/Favorites"}>
                        <FaHeart />
                        <span>{t('navbar.favorites')}</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <div className={"proBxLink"} >
                        <FaCircleHalfStroke />
                        <div className='d-flex' style={{flex:"1" ,justifyContent:"space-between", alignItems:"center"}}>
                            <span>{t('navbar.theme')}</span>
                            <ThemeBtn btnID={"proBxThe"}/>
                        </div>
                    </div>
                </li>
                <li className="profileItem bxLink">
                    <div className={"proBxLink clsProBx"} >
                        <LangBtn 
                        setIsLoading={setIsLoading}
                        txt={t('navbar.language')}
                        />
                    </div>
                </li>
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/Settings"}>
                        <FaGear />
                        <span>{t('navbar.settings')}</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <div className={"proBxLink clsProBx"}>
                        <IoLogOutOutline size={16}/>
                        <span>{t('navbar.logout')}</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ProfileBox;
