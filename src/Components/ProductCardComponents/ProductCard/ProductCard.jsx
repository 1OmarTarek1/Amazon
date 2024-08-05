import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { FaCartShopping, FaEye } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../../../Components/FavoritesPageComponents/FavoritesContext/FavoritesContext';
import { CartContext } from '../../AddToCartComponents/CartContext/CartContext';
import './ProductCard.css';
import { LikeBtn } from '../../../Components';

const ProductCard = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [productCount, setProductCount] = useState(1);
    const navigate = useNavigate();
    const { toggleFavorites, isFavorite } = useContext(FavoritesContext);
    const { addToCart } = useContext(CartContext);
    const [isFavorited, setIsFavorited] = useState(isFavorite(product.id));
    const { t } = useTranslation();

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert(t('productDetails.selectBothMessage'));
            return;
        }
        const count = productCount === 0 ? 1 : productCount;
        const productData = {
            id: Date.now(), // Ensure each product has a unique ID
            price: product.price,
            frontImg: product[`${selectedColor || 'main'}ImgFront`],
            title: product.title,
            selectedColor,
            selectedSize,
            productCount: count,
        };
        addToCart(productData);
        alert('Product added to cart');
    };

    const handleViewClick = () => {
        navigate('/Products/ProductDetails', { state: { product } });
    };

    const handleToggleFavorites = () => {
        toggleFavorites(product);
        setIsFavorited(!isFavorited);
    };

    const handleIncrement = () => {
        setProductCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        setProductCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
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
                    ></button>
                );
            }
        });
        return colorButtons;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
    };

    return (
        <div className="cardWrapper" data-aos={"fade-up"} id={product.id}>
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
                        <LikeBtn
                            handleToggleFavorites={handleToggleFavorites}
                            isFavorited={isFavorited}
                        />
                        <button className="headBtn view-button" onClick={handleViewClick}>
                            <FaEye />
                        </button>
                    </div>
                    <div className="cardTitle">{product.title}</div>
                </div>

                <p className="priceWrapper">
                    <span className="price">{product.sale}LE</span>
                    <span className="sale-price">{product.price}LE</span>
                </p>

                <div className="product-details">
                    <div className="product-colors">{renderColorButtons()}</div>

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
                        onClick={handleDecrement}
                        style={{
                            borderRadius: "0 0 0 3px",
                        }}
                    >
                        -
                    </button>
                    <button
                        className="footBtn add-to-cart-button"
                        onClick={handleAddToCart}
                        style={{
                            flex: "4",
                            borderInline: "1px solid var(--color-borderSecLight)",
                        }}
                    >
                        <FaCartShopping />
                        {productCount > 1 && (
                            <span className="product-count">{productCount}</span>
                        )}
                    </button>
                    <button
                        className="footBtn remove-from-cart-button"
                        onClick={handleIncrement}
                        style={{
                            borderRadius: "0 0 3px 0",
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
