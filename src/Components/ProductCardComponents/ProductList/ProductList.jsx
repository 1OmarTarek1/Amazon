import React from 'react';
import { ProductCard } from '../../../Components';

const ProductList = ({ products }) => {
    return (
        <div className="cards">
            {products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                />
            ))}
        </div>
    );
};

export default ProductList;
