import React, { forwardRef } from 'react';
import './NavBtn.css';

const NavBtn = forwardRef(({ openNav, handleOpenNav }, ref) => {
    return (
        <div 
        ref={ref}
        className={openNav ? "navBtn opened" : "navBtn"} 
        onClick={handleOpenNav}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
});

export default NavBtn;
