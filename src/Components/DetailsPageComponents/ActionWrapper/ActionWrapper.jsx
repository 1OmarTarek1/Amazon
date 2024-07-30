import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import './ActionWrapper.css';

const ActionWrapper = ({ handleAddToCart }) => {
    return (
        <div className="actionWrapper">
            <button
                className="footBtn add-to-cart-button"
                onClick={handleAddToCart}
                style={{
                    flex: "1",
                    borderRadius: "0 0 0 3px"
                }}
            >
                -
            </button>
            <button
                className="footBtn add-to-cart-button"
                onClick={handleAddToCart}
                style={{
                    flex: "4",
                    borderInline: "1px solid var(--color-borderSecLight)"
                }}
            >
                <FaCartShopping />
                <span className='product-count'>0</span>
            </button>
            <button
                className="footBtn remove-from-cart-button"
                style={{
                    flex: "1",
                    borderRadius: "0 0 3px 0"
                }}
            >
                +
            </button>
        </div>
    );
};

export default ActionWrapper;
