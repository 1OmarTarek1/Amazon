import React from 'react';
import './TshirtsPage.css';
import TestData from '../../../../Data/TestData';
import { MainContainer, ProductCard } from '../../../../Components';


const TshirtsPage = () => {
    const products = TestData();

    return (
        <MainContainer>
            <div className="filterBtns">
                <button className="filterBtn">Polo</button>
                <button className="filterBtn">Nike</button>
                <button className="filterBtn">Adidas</button>
                <button className="filterBtn">Over Size</button>
                <button className="filterBtn">Basic</button>
            </div>
            <div className="tshirts-page">
                <div className="cards">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </MainContainer>
    );
};

export default TshirtsPage;

