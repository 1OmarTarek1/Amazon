import './MyShopPage.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const MyShopPage = () => {
    const location = useLocation();
    const { cart } = location.state || {};

    if (!cart || cart.length === 0) {
        return <div>No products in the cart.</div>;
    }

    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.productCount, 0);

    return (
        <div className="my-shop-page">
            <h1>My Shop Page</h1>
            {cart.map((product, index) => (
                <div key={index} className="product-info">
                    <img
                        src={product.frontImg}
                        alt={`${product.title} ${product.selectedColor} Front`}
                        className="product-image"
                    />
                    <div className="product-details">
                        <h2>{product.title}</h2>
                        <p>{`Color: ${product.selectedColor}`}</p>
                        <p>{`Size: ${product.selectedSize}`}</p>
                        <p>{`Price: ${product.price} LE`}</p>
                        <p>{`Count: ${product.productCount}`}</p>
                        <p>{`Total Price: ${product.price * product.productCount} LE`}</p>
                    </div>
                </div>
            ))}
            <div className="total-price">
                <h2>{`Total Price for All Products: ${totalPrice} LE`}</h2>
            </div>
        </div>
    );
};

export default MyShopPage;
