import './CartLink.css';
import { Cart } from '../../Components';
import { FaCartShopping } from 'react-icons/fa6';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const CartLink = () => {
    const [activeCartBx, setActiveCartBx] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const cartRef = useRef(null);
    const cartBtnRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/MyShop") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleMouseDown = (event) => {
            if (
                cartRef.current &&
                !cartRef.current.contains(event.target) &&
                cartBtnRef.current &&
                !cartBtnRef.current.contains(event.target)
            ) {
                setActiveCartBx(false);
            }
        };

        document.addEventListener('mousedown', handleMouseDown);
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    return (
        <div 
        className={`cartBtnWrapper ${isActive || activeCartBx ? 'active' : ''}`} 
        style={{ position: 'relative' }}
        >
            <div
                className="cartBtn navProfIcon shopCarIcn"
                onClick={() => setActiveCartBx(!activeCartBx)}
                ref={cartBtnRef}
                style={{
                    color: "var(--font-navColor)"
                }}
            >
                <FaCartShopping />
            </div>
            <Cart
                activeCartBx={activeCartBx}
                setActiveCartBx={setActiveCartBx}
                ref={cartRef}
            />
        </div>
    );
};

export default CartLink;
