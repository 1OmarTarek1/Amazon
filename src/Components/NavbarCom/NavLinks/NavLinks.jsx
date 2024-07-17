import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import {NestedLink} from '../../../Components'
import { FaHome } from 'react-icons/fa'
import { FaShop, FaUsersRectangle } from 'react-icons/fa6'

import './NavLinks.css'

const NavLinks = () => {
    const { t } = useTranslation();

    return (
    <>
        <li>
            <NavLink to="/" className="navLink clsLink">
                <FaHome /> 
                <span>
                    {t('navbar.home')}
                </span>
            </NavLink>
        </li>
        <li> 
            <NavLink to="/Shop" className="navLink clsLink">
                <FaShop />
                <span>
                    {t('navbar.shop')}
                </span>
            </NavLink>
        </li>
        <li className='nestedLI'>
            <NestedLink />
        </li>
        <li>
            <NavLink to="/About" className="navLink clsLink">
                <FaUsersRectangle />
                <span>
                    {t('navbar.about')}
                </span>
            </NavLink>
        </li>
    </>
    )
}

export default NavLinks