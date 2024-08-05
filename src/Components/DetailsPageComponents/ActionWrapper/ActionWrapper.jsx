import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import './ActionWrapper.css';

const ActionWrapper = ({ handleAddToCart, productCount, handleIncrement, handleDecrement }) => {
    return (
        <div className="actionWrapper">
            <button
                className="footBtn add-to-cart-button"
                onClick={handleDecrement}
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
                {productCount > 1 && (
                    <span className='product-count'>{productCount}</span>
                )}
            </button>
            <button
                className="footBtn remove-from-cart-button"
                onClick={handleIncrement}
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
