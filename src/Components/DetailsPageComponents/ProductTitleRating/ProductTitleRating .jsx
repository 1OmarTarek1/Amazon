import { CustomReactStars } from '../../../Components';
import './ProductTitleRating .css';

const ProductTitleRating = ({ title }) => {
    return (
        <div className="detTitle">
            <div>{title}</div>
            <div 
                className="productMainRating d-flex"
                style={{
                    gap: "10px",
                    alignItems: "center"
                }}
            >
                <CustomReactStars
                    count={5}
                    value={4}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                />
            </div>
        </div>
    );
};

export default ProductTitleRating;
