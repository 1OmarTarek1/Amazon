import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategoryTitlesData from '../../../Data/CategoryTitlesData';
import { IoCartOutline, IoClose, IoContrastOutline, IoEarth, IoHeartOutline, IoHomeOutline, IoLogOutOutline, IoNotificationsOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';
import { DetailsItem, LangBtn, Search, ThemeBtn } from '../../../Components';
import { MdSearch } from 'react-icons/md';
import './SidebarContent.css';

const SidebarContent = ({ clickEvent, setIsLoading }) => {
    const [searchValue, setSearchValue] = useState("");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const { t } = useTranslation();
    const Data = CategoryTitlesData(t);
    const DetailsItems = Data.map((item, index) => {
        return <DetailsItem
            key={index}
            id={index}
            gender={item.gender}
            text={item.category}
            links={item.items}
            clickEvent={clickEvent}
        />
    });

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="sidebar-content">
            <NavLink to={"/Profile"} className="sideHeader" onClick={clickEvent}>
                <div className="profilePhoto">
                    <IoPersonOutline />
                </div>
                <div className="textWrapper">
                    <span className='sideUsername'>
                        {t("navbar.username")}
                    </span>
                    <span className='sideUserActivity'>
                        {t("navbar.usernameLevel")}
                    </span>
                </div>
            </NavLink>

            <div className="sideBody">
                <div className="searchWrapper">
                    <Search
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        cla={"search sideSearch"}
                        id={"sidebarSearch"}
                    />
                    <label htmlFor='sidebarSearch'>
                        <MdSearch />
                    </label>
                </div>

                <div className="containerIt">
                    <NavLink to={"/"} className="sideItem" onClick={clickEvent}>
                        <IoHomeOutline />
                        <div className="name">{t("navbar.home")}</div>
                    </NavLink>
                    <NavLink to={"/Notifications"} className="sideItem" onClick={clickEvent}>
                        <IoNotificationsOutline />
                        <div className="name">{t("navbar.notifications")}</div>
                    </NavLink>
                    <NavLink to={"/MyShop"} className="sideItem" onClick={clickEvent}>
                        <IoCartOutline />
                        <div className="name">{t("navbar.shoppingCar")}</div>
                    </NavLink>
                    <NavLink to={"/Favorites"} className="sideItem" onClick={clickEvent}>
                        <IoHeartOutline />
                        <div className="name">{t("navbar.favorites")}</div>
                    </NavLink>
                </div>

                {DetailsItems}

                <div className="sideFooter">
                    <div className="footerItems">
                        <div className="sideItem">
                            <IoContrastOutline />
                            <div className="name">
                                <span>{t("navbar.theme")}</span>
                                <ThemeBtn btnID={"sideThe"} />
                            </div>
                        </div>

                        <div className="sideItem">
                            <IoEarth />
                            <div className="name">
                                <span>{t("navbar.language")}</span>
                                <div className="" onClick={clickEvent}>
                                    <LangBtn setIsLoading={setIsLoading} />
                                </div>
                            </div>
                        </div>

                        <NavLink to={"/Settings"} className="sideItem" onClick={clickEvent}>
                            <IoSettingsOutline />
                            <div className="name">{t("navbar.settings")}</div>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="Logout">
                <div className="sideItem" onClick={clickEvent}>
                    <IoLogOutOutline />
                    <div className="name">{t("navbar.logout")}</div>
                </div>

                {windowWidth <= 350 && (
                    <div className="sideItem" onClick={clickEvent}>
                        <IoClose />
                        <div className="name">{t("navbar.exit")}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SidebarContent;
