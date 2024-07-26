import { Outlet } from 'react-router-dom';
import TestData from '../../../../Data/TestData';
import { MainContainer, ProductCard } from '../../../../Components';
import './ProductPage.css';


const ProductPage = () => {
    const products = TestData();

    return (
        <MainContainer>
            <div className="filterBtns">
                <div className="cont">
                    <button className="filterBtn">Polo</button>
                    <button className="filterBtn">Nike</button>
                    <button className="filterBtn">Adidas</button>
                    <button className="filterBtn">OverSize</button>
                    <button className="filterBtn">Basic</button>
                </div>
            </div>
            <div className="ProductPage">
                <div className="cards">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
            <Outlet />
        </MainContainer>
    );
};

export default ProductPage;
