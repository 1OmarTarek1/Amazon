import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import CategoryTitlesData  from '../../../Data/CategoryTitlesData'
import { FaBars} from 'react-icons/fa6';
import { IoCartOutline, IoContrastOutline, IoEarth, IoHeartOutline, IoHomeOutline, IoLogOutOutline, IoNotificationsOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';
import { DetailsItem, LangBtn, Search, ThemeBtn } from '../../../Components';
import { MdSearch } from 'react-icons/md';
import './SidebarContent.css';

const SidebarContent = ({ clickEvent, setIsLoading }) => {
    const [searchValue, setSearchValue] = useState("");
    
    const { t } = useTranslation();
    const Data = CategoryTitlesData(t);
    const DetailsItems = Data.map(( item, index ) => {
        return <DetailsItem key={index}
            id       = { index             }
            gender   = { item.gender       }
            text     = { item.category     }
            links    = { item.items }
        />
    })


    return (
        <div className="sidebar-content">
            <div className="sideHeader" onClick={clickEvent}>
                <FaBars /> <span>LOGO</span>
            </div>


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
                    <NavLink to={"/"} className="sideItem">
                        <IoHomeOutline />
                        <div className="name">{t("navbar.home")}</div>
                    </NavLink>
                    <NavLink to={"/Profile"} className="sideItem">
                        <IoPersonOutline />
                        <div className="name">{t("navbar.profile")}</div>
                    </NavLink>
                    <NavLink to={"/Notifications"} className="sideItem">
                        <IoNotificationsOutline  />
                        <div className="name">{t("navbar.notifications")}</div>
                    </NavLink>
                    <NavLink to={"/MyShop"} className="sideItem">
                        <IoCartOutline />
                        <div className="name">{t("navbar.shoppingCar")}</div>
                    </NavLink>
                    <NavLink to={"/Favorites"} className="sideItem">
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
                                <ThemeBtn btnID={"sideThe"}/>
                            </div>
                        </div>
                        
                        <div className="sideItem">
                            <IoEarth />
                            <div className="name">
                                <span>{t("navbar.language")}</span>
                                <LangBtn setIsLoading={setIsLoading} />
                            </div>
                        </div>


                        <NavLink to={"/Settings"} className="sideItem">
                            <IoSettingsOutline />
                            <div className="name">{t("navbar.settings")}</div>
                        </NavLink>
                    </div>
                </div>
            </div>

                <div className="Logout">
                    <div className="sideItem">
                        <IoLogOutOutline />
                        <div className="name">{t("navbar.logout")}</div>
                    </div>
                </div>
        </div>
    );
};

export default SidebarContent;

