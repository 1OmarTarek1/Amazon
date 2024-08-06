import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import { FaBell, FaCartShopping, FaHeart, FaUser } from 'react-icons/fa6'
import './MobileNavSec.css'


const navItems = [
    { to: "/", icon: <FaHome />, className: "homeLink" },
    { to: "/Notifications", icon: <FaBell />, className: "notificationLink" },
    { to: "/Profile", icon: <FaUser />, className: "userLink" },
    { to: "/MyShop", icon: <FaCartShopping />, className: "cartLink" },
    { to: "/Favorites", icon: <FaHeart />, className: "favoritesLink" }
];

const MobileNavSec = () => {
    const location = useLocation();
    const [items, setItems] = useState(navItems);

    useEffect(() => {
        const activeIndex = navItems.findIndex(item => item.to === location.pathname);
        if (activeIndex !== -1) {
            const newItems = [...navItems];
            const middleIndex = 2; // Center index
            const activeItem = newItems.splice(activeIndex, 1)[0];
            newItems.splice(middleIndex, 0, activeItem);
            setItems(newItems);
        }
    }, [location.pathname]);

    return (
        <div className='MobileNavSec'>
            <ul className="LinksContainer">
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.to} className={`mobLink ${item.className}`}>
                            {item.icon}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileNavSec;

