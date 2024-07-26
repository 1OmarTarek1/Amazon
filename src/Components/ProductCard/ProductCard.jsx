import React, { useState } from 'react';
import Slider from 'react-slick';
import './ProductCard.css';
import { FaCartShopping, FaEye, FaHeart } from 'react-icons/fa6';

const ProductCard = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const renderColorButtons = () => {
        const colorButtons = [];
        Object.entries(product.color).forEach(([key, value]) => {
            if (typeof value === 'string') {
                colorButtons.push(
                    <button
                        key={key}
                        className={`color-button ${selectedColor === key ? 'selected' : ''}`}
                        style={{ backgroundColor: key }}
                        onClick={() => handleColorChange(key)}
                    >
                        {/* {value} */}
                    </button>
                );
            }
        });
        return colorButtons;
    };

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert('Please select both a color and a size.');
            return;
        }
        // Logic for adding the product to the cart
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
    };

    return (
        <div className="product-card">
            <div className="product-images">
                <Slider {...settings}>
                    <img
                        src={product[`${selectedColor || 'main'}ImgFront`]}
                        alt={`${product.title} ${selectedColor || 'default'} Front`}
                    />
                    <img
                        src={product[`${selectedColor || 'main'}ImgBack`]}
                        alt={`${product.title} ${selectedColor || 'default'} Back`}
                    />
                </Slider>
                <div className="btnsWrapper">                    
                        {/* ❤️ */}
                    <button className="headBtn favorite-button">
                        <FaHeart />
                    </button>
                    <button className="headBtn view-button">
                        <FaEye />
                    </button>
                </div>
                <div className='cardTitle'>{product.title}</div>
            </div>

            <p className='priceWrapper'>
                <span className="price">{product.sale}</span>
                <span className="sale-price">{product.price}</span>
            </p>
            
            <div className="product-details">
                <div className="product-colors">
                    {renderColorButtons()}
                </div>

                <div className="product-sizes">
                    {Object.entries(product.size).map(([key, size]) => (
                        <button
                            key={key}
                            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => handleSizeChange(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>

            </div>

            <div className="product-actions">
                <button
                    className="footBtn add-to-cart-button"
                    onClick={handleAddToCart}
                    style={{
                        borderRadius:"0 0 0 3px"
                    }}
                >
                    -
                </button>
                <button
                    className="footBtn add-to-cart-button"
                    style={{
                        flex:"4",
                        borderInline:"1px solid var(--color-borderSecLight)"
                    }}
                    onClick={handleAddToCart}
                >
                    <FaCartShopping />
                    <span className='product-count'>0</span>
                </button>
                <button
                    className="footBtn remove-from-cart-button"
                    style={{
                        borderRadius:"0 0 3px 0"
                    }}
                    // onClick={handleAddToCart}
                >
                    +
                </button>

            </div>
        </div>
    );
};

export default ProductCard;

