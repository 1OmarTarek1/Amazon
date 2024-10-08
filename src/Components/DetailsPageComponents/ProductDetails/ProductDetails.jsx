import React, { useContext } from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaBan, FaCheck, FaUser } from 'react-icons/fa6';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { FavoritesContext } from '../../../Components/FavoritesPageComponents/FavoritesContext/FavoritesContext';
import { CustomReactStars, FakeComments, LikeBtn } from '../../../Components';
import './ProductDetails.css';

const ProductDetails = ({ 
    product, 
    selectedColor, 
    setSelectedColor, 
    selectedSize, 
    setSelectedSize, 
    settings, 
    comments, 
    editingIndex, 
    rating, 
    handleRatingChange, 
    comment,
    handleCommentChange, 
    handleReviewSubmit, 
    errorMessage, 
    handleEdit, 
    handleDelete, 
    starsKey, 
    hasReviewed, 
    renderColorButtons, 
    renderSizeButtons,
}) => {
    const { t } = useTranslation();
    const { toggleFavorites, isFavorite } = useContext(FavoritesContext);
    const isArabic = (text) => {
        const arabicPattern = /[\u0600-\u06FF]/;
        return arabicPattern.test(text);
    };

    const getCommentStyle = (text) => ({
        float: isArabic(text) ? 'right' : 'left',
    });

    const placeholder = t("placeholders.comment");
    const isPlaceholderArabic = isArabic(placeholder);

    return (
        <div className="detailsWrapper">
            <div className="detail sideDet">
                <div className="product-sizes">
                    <h3>{t('productDetails.size')}</h3>
                    <div className="d-flex gap-2">
                        {renderSizeButtons()}
                    </div>
                </div>

                <div className="barnd">
                    <span>
                        {t("productDetails.brand")}
                    </span>
                    {product.brand}
                </div>

                <div className='priceWrapper'>
                    {t("productDetails.price")} 
                    <div className="">
                        {product.price}LE
                        <span className='sale'>
                            {product.sale}LE
                        </span>
                    </div> 
                </div>

                <div className="product-sizes">
                    <h3>{t("productDetails.color")}</h3>
                    <div className="d-flex gap-2">
                        {renderColorButtons()}
                    </div>
                </div>
            </div>

            <div className="detail midDet">
                <div className="product-images" style={{ position: "relative" }}>
                    <Slider {...settings}>
                        <img
                            src={product[`${selectedColor}ImgFront`]}
                            alt={`${product.title} ${selectedColor} Front`}
                        />
                        <img
                            src={product[`${selectedColor}ImgBack`]}
                            alt={`${product.title} ${selectedColor} Back`}
                        />
                    </Slider>
                    <div className="btnsWrapper">
                        <LikeBtn 
                            handleToggleFavorites={() => toggleFavorites(product)}
                            isFavorited={isFavorite(product.id)}
                        />
                    </div>
                </div>
            </div>

            <div className="detail sideDet gap-0">
                <div className="product-rating">
                    <h4>{t("productDetails.review")}</h4>
                    {(comments.length === 0 || editingIndex !== null) && (
                        <CustomReactStars
                            key={starsKey}
                            count={5}
                            value={rating}
                            onChange={handleRatingChange}
                            size={24}
                            activeColor="#ffd700"
                            edit={!hasReviewed || editingIndex !== null} 
                        />
                    )}
                </div>
                <div className="CommentsWrapper">
                    <div className="product-review">
                        <form 
                            onSubmit={handleReviewSubmit}
                            style={{ position: "relative" }}
                        >
                            <textarea
                                id='comment'
                                value={comment}
                                onChange={handleCommentChange}
                                placeholder={placeholder}
                                rows="4"
                                disabled={hasReviewed && editingIndex === null}
                                dir={ comment.length === 0 
                                    ? (isPlaceholderArabic ? 'rtl' : 'ltr') 
                                    : (isArabic(comment) ? 'rtl' : 'ltr')}
                            />
                            <button 
                                type="submit" 
                                disabled={hasReviewed && editingIndex === null}
                            >
                                {editingIndex !== null ? <FaCheck /> : (hasReviewed ? <FaBan /> : <FaArrowRight className='submitIcon'/>)}                                
                            </button>
                        </form>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>

                    <div className="submitted-comments">
                        {comments.length === 0 ? (
                            <></>
                        ) : (
                            comments.map((comment, index) => (
                                editingIndex === null && (
                                    <div key={`${starsKey}-${index}`} className="comment">
                                        <div className="commentHead d-flex" style={{ justifyContent: "space-between" }}>
                                            <div className="d-flex gap-2" style={{ justifyContent: "center", alignItems: "center" }}>
                                                <span style={{ display: 'flex', alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "3px", border: "1px solid var(--color-borderSecLight)", fontSize: "18px" }}>
                                                    <FaUser />
                                                </span>
                                                <div className='d-flex' style={{ flexDirection: "column" }}>
                                                    <span style={{ fontSize: "14px" }}>Omar Tarek</span>
                                                    <span style={{ fontSize: "11px", color: "var(--font-secondaryColor)" }}>{t("navbar.usernameLevel")}</span>
                                                </div>
                                            </div>
                                            <CustomReactStars
                                                count={5}
                                                value={comment.rating}
                                                size={15}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p 
                                            className='commented'
                                            dir={isArabic(comment.text) ? 'rtl' : 'ltr'}
                                            style={getCommentStyle(comment.text)}
                                        >
                                            {comment.text}
                                        </p>
                                        <div className="btnWrappers">
                                            <button onClick={() => handleEdit(index)}>
                                                <FaEdit />
                                            </button>
                                            <button onClick={() => handleDelete(index)}>
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                )
                            ))
                        )}
                        <FakeComments 
                        getCommentStyle={getCommentStyle}
                        comment={comment}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
