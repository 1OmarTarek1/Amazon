import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TestData from '../../../../Data/TestData';
import { MainContainer, FilterButtonGroup, ProductList } from '../../../../Components';
import './ProductPage.css';

const ProductPage = () => {
    const products = TestData();
    const [selectedFilter, setSelectedFilter] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        setSelectedFilter(hash || null);
    }, [location]);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        const newHash = filter ? `#${filter}` : '';
        if (newHash) {
            window.history.pushState(null, '', newHash);
        } else {
            window.history.replaceState(null, '', window.location.pathname);
        }
    };

    // Extract unique brands from products
    const uniqueBrands = [...new Set(products.map(product => product.brand))];

    const filteredProducts = selectedFilter
        ? products.filter(product => product.brand === selectedFilter)
        : products;

    return (
        <MainContainer>
            <FilterButtonGroup
                uniqueBrands={uniqueBrands}
                selectedFilter={selectedFilter}
                onFilterClick={handleFilterClick}
            />
            <div className="ProductPage">
                <ProductList products={filteredProducts} />
            </div>
            <Outlet />
        </MainContainer>
    );
};

export default ProductPage;
