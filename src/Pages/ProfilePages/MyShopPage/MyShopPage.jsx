import { useLocation } from 'react-router-dom';
import { MainContainer } from '../../../Components';
import './MyShopPage.css';

const MyShopPage = () => {
    const location = useLocation();
    const { cart } = location.state || {};

    if (!cart || cart.length === 0) {
        return <div>No products in the cart.</div>;
    }

    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.productCount, 0);

    return (
        <div className="my-shop-page">
            <MainContainer>
                <div className="allProducts">
                    {cart.map((product, index) => (
                        <div key={index} className="product-info">
                            <div className="imgWrapper d-flex gap-3">
                                <img
                                    src={product.frontImg}
                                    alt={`${product.title} ${product.selectedColor} Front`}
                                    className="product-image"
                                />
                                {/* <div className="prodTitle">
                                    <div>{product.brand}</div>
                                    <div>{product.title}</div>
                                </div> */}
                            </div>
                            <ul className="product-details">
                                <li className='detItem'>

                                    <div className="detItemHead">
                                        {product.brand}
                                    </div>
                                    <div className="detItemFooter">
                                        {product.title}
                                    </div>
                                </li>
                                <li className='detItem'>
                                    <div className="detItemHead">
                                        Color
                                    </div>
                                    <div className="detItemFooter">
                                        {product.selectedColor}
                                    </div>
                                </li>
                                <li className='detItem'>
                                    <div className="detItemHead">
                                        Size
                                    </div>
                                    <div className="detItemFooter">
                                        {product.selectedSize}
                                    </div>
                                </li>
                                <li className='detItem'>
                                    <div className="detItemHead">
                                        Price
                                    </div>
                                    <div className="detItemFooter">
                                        {product.price} LE
                                    </div>
                                </li>
                                <li className='detItem'>
                                    <div className="detItemHead">
                                        Count
                                    </div>
                                    <div className="detItemFooter">
                                        {product.productCount}
                                    </div>
                                </li>
                                <li className='detItem'>
                                    <div className="detItemHead">
                                        Total
                                    </div>
                                    <div className="detItemFooter">
                                        {product.price * product.productCount} LE
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="total-price">
                    <h2>{`Total Price for All Products: ${totalPrice} LE`}</h2>
                </div>
            </MainContainer>
        </div>
    );
};

export default MyShopPage;
