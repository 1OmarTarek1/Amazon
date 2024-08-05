import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../../../Components/AddToCartComponents/CartContext/CartContext';
import { MainContainer, ActionWrapper, ProductDetails, ProductTitleRating } from '../../../Components';
import './DetailsPage.css';

const DetailsPage = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const { addToCart } = useContext(CartContext);

    const [selectedColor, setSelectedColor] = useState('main');
    const [selectedSize, setSelectedSize] = useState(null);
    const [productCount, setProductCount] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [starsKey, setStarsKey] = useState(0);
    const [hasReviewed, setHasReviewed] = useState(false);

    useEffect(() => {
        setHasReviewed(comments.length > 0);
    }, [comments]);

    if (!product) {
        return <div>Product not found.</div>;
    }

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert('Please select both a color and a size.');
            return;
        }

        const productToAdd = {
            ...product,
            selectedColor,
            selectedSize,
            productCount,
            id: Date.now(), // Ensure each product has a unique ID
            frontImg: product[`${selectedColor}ImgFront`], // Add image URL
        };

        addToCart(productToAdd);
        alert('Product added to cart');
    };

    const handleIncrement = () => {
        setProductCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        setProductCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const renderColorButtons = () => {
        return Object.entries(product.color).map(([key]) => (
            <button
                key={key}
                className={`color-button ${selectedColor === key ? 'selected' : ''}`}
                style={{ backgroundColor: key }}
                onClick={() => setSelectedColor(key)}
            ></button>
        ));
    };

    const renderSizeButtons = () => {
        return Object.entries(product.size).map(([key, value]) => (
            <button
                key={key}
                className={`size-button ${selectedSize === value ? 'selected' : ''}`}
                onClick={() => setSelectedSize(value)}
            >
                {value}
            </button>
        ));
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (hasReviewed && editingIndex === null) {
            setErrorMessage('You have already submitted a review. You cannot submit more than one review.');
            return;
        }
        if (rating === 0 || comment.trim() === '') {
            setErrorMessage('You should rate and comment both.');
            return;
        }

        const newComment = {
            rating,
            text: comment,
        };

        let updatedComments;
        if (editingIndex !== null) {
            updatedComments = [...comments];
            updatedComments[editingIndex] = newComment;
            setEditingIndex(null);
        } else {
            updatedComments = [...comments, newComment];
        }

        setComments(updatedComments);
        setRating(0);
        setComment('');
        setErrorMessage('');
        setStarsKey((prevKey) => prevKey + 1); // Force re-render
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setRating(comments[index].rating);
        setComment(comments[index].text);
        setStarsKey((prevKey) => prevKey + 1); // Force re-render
    };

    const handleDelete = (index) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this comment?');
        if (isConfirmed) {
            const updatedComments = comments.filter((_, i) => i !== index);
            setComments(updatedComments);
            setHasReviewed(updatedComments.length > 0);
            setStarsKey((prevKey) => prevKey + 1); // Force re-render
        }
    };

    return (
        <div className="detailsPage">
            <MainContainer>
                <div className="detailsContainer">
                    <ProductTitleRating title={product.title} />

                    <ProductDetails 
                        product={product} 
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                        settings={settings}
                        comments={comments}
                        editingIndex={editingIndex}
                        rating={rating}
                        handleRatingChange={handleRatingChange}
                        comment={comment}
                        handleCommentChange={handleCommentChange}
                        handleReviewSubmit={handleReviewSubmit}
                        errorMessage={errorMessage}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        starsKey={starsKey}
                        hasReviewed={hasReviewed}
                        renderColorButtons={renderColorButtons}
                        renderSizeButtons={renderSizeButtons}
                    />
                    
                    <ActionWrapper 
                        handleAddToCart={handleAddToCart}
                        productCount={productCount}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                    />
                </div>
            </MainContainer>
        </div>
    );
};

export default DetailsPage;
