import { ProductCard } from '../../../Components'; 

const ProductList = ({ products }) => {
    return (
        <div className="cards">
            {products.map((product, index) => (
                <ProductCard 
                    key={index} 
                    product={product} 
                />
            ))}
        </div>
    );
};

export default ProductList;
