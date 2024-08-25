import React, { useContext, forwardRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../CartContext/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import './Cart.css';

const Cart = forwardRef(({ activeCartBx, setActiveCartBx }, ref) => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleCheckout = () => {
        setActiveCartBx(false); // Close the cart
        navigate('/MyShop', { state: { cart } });
        // clearCart(); // Clear the cart after navigating
    };

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleClearCart = () => {
        const isConfirmed = window.confirm(t("AddToCartPage.confirmDeleteAll"));
        if (isConfirmed) {
            clearCart();
        }
    };

    return (
        <div ref={ref} className={`cartWrapper ${activeCartBx && 'active'}`}>
            <NavLink 
                to={"/MyShop"}
                className="cartTitle" 
                onClick={() => { setActiveCartBx(false); }}
            >
                {t("AddToCartPage.cartTitle")}
            </NavLink>
            {cart.length === 0 ? (
                <p
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        height: "100%",
                        width: "100%",
                        margin: "0",
                        color: "var(--font-secondaryColor)",
                        fontWeight: "600"
                    }}
                >
                    <span style={{ display: "grid", placeContent: "center" }}>
                        {t("AddToCartPage.noDataYet")}
                    </span>
                </p>
            ) : (
                <ul className="addedCards">
                    {cart.map((product, index) => (
                        <li className="addedCard" id={product.id} key={index}>
                            <div className="d-flex gap-3">
                                <div className="cardImgWrapper"
                                    style={{
                                        border: `1px solid ${product.selectedColor}`
                                    }}
                                >
                                    <img src={product.frontImg} alt={product.title} />
                                    <p>{product.productCount}</p>
                                    <p>{product.selectedSize}</p>
                                </div>
                                <div className="addedCardDetails">
                                    <div>{product.title}</div>
                                    <p>{product.price} LE</p>
                                </div>
                            </div>

                            <button onClick={() => handleRemove(product.id)}>
                                <FaTrashAlt />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="footerBtn">
                    <button onClick={handleCheckout}>
                        {t("AddToCartPage.checkOut")}
                    </button>
                    {cart.length > 1 && (
                        <button onClick={handleClearCart}>
                            <FaTrashAlt />
                            <span>
                                {t("AddToCartPage.deleteBtn")}
                            </span>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
});

export default Cart;
