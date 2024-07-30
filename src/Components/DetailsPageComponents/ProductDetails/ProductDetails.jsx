import { CustomReactStars } from '../../../Components';
import Slider from 'react-slick';
import { FaArrowRight, FaBan, FaCheck, FaUser } from 'react-icons/fa6';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './ProductDetails.css';

const ProductDetails = ({ product, selectedColor, setSelectedColor, selectedSize, setSelectedSize, settings, comments, editingIndex, rating, handleRatingChange, comment, handleCommentChange, handleReviewSubmit, errorMessage, handleEdit, handleDelete, starsKey, hasReviewed, renderColorButtons, renderSizeButtons }) => {
    return (
        <div className="detailsWrapper">
            <div className="detail sideDet">
                <div className="product-sizes">
                    <h3>Size</h3>
                    <div className="d-flex gap-2" >
                        {renderSizeButtons()}
                    </div>
                </div>

                <div className="barnd">
                    <span>Brand</span>
                    {product.brand}
                </div>

                <div className='priceWrapper'>
                    Price 
                    <div className="">
                        {product.price}
                        <span className='sale'>
                            {product.sale}
                        </span>
                    </div> 
                </div>

                <div className="product-sizes">
                    <h3>Color</h3>
                    <div className="d-flex gap-2" >
                        {renderColorButtons()}
                    </div>
                </div>
            </div>

            <div className="detail midDet">
                <div className="product-images">
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
                </div>
            </div>

            <div className="detail sideDet gap-0" >
                <div className="product-rating">
                    <h4>Leave a review</h4>
                    { ( comments.length === 0 || editingIndex !== null ) && (
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
                        style={{position:"relative"}}
                        >
                            <textarea
                                id='comment'
                                value={comment}
                                onChange={handleCommentChange}
                                placeholder="Write your review here..."
                                rows="4"
                                disabled={hasReviewed && editingIndex === null}
                            />
                            <button 
                            type="submit" 
                            disabled={hasReviewed && editingIndex === null}
                            >
                                {editingIndex !== null ? <FaCheck /> : (hasReviewed ? <FaBan /> : <FaArrowRight />)}                                
                            </button>
                        </form>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>


                    <div className="submitted-comments">
                        {comments.length === 0 ? (
                            // <p>No reviews yet.</p>
                            <></>
                        ) : (
                            comments.map((comment, index) => (
                                editingIndex === null && (
                                    <div key={`${starsKey}-${index}`} className="comment">
                                        <div className="commentHead d-flex"
                                        style={{
                                            justifyContent:"space-between"
                                        }}>
                                            <div className="d-flex gap-2"
                                            style={{
                                                justifyContent:"center",
                                                alignItems:"center"
                                            }}>
                                                <span style={{
                                                    display:'flex',
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    width:"40px",
                                                    height:"40px",
                                                    borderRadius:"3px",
                                                    border:"1px solid var(--color-borderLight)",
                                                    fontSize:"18px"
                                                }}>
                                                    <FaUser />
                                                </span>
                                                <div className='d-flex'
                                                style={{
                                                    flexDirection:"column",
                                                }}>
                                                    <span
                                                    style={{
                                                        fontSize:"14px"
                                                    }}
                                                    >Omar Tarek</span>
                                                    <span
                                                    style={{
                                                        fontSize:"11px",
                                                        color:"var(--font-secondaryColor)"
                                                    }}>VIP</span>
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
                                        <p className='commented'>
                                            {comment.text}
                                        </p>
                                        <div className="btnWrappers">
                                            <button onClick={() => handleEdit(index)}>
                                                <FaEdit 
                                                style={{
                                                    position:"relative",
                                                    left:"1px",
                                                }}/>
                                            </button>
                                            <button onClick={() => handleDelete(index)}>
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                )
                            ))
                        )}

                        <div className="comment">
                            <div className="commentHead d-flex"
                            style={{
                                justifyContent:"space-between"
                            }}>
                                <div className="d-flex gap-2"
                                style={{
                                    justifyContent:"center",
                                    alignItems:"center"
                                }}>
                                    <span style={{
                                        display:'flex',
                                        alignItems:"center",
                                        justifyContent:"center",
                                        width:"40px",
                                        height:"40px",
                                        borderRadius:"3px",
                                        border:"1px solid var(--color-borderLight)",
                                        fontSize:"18px"
                                    }}>
                                        <FaUser />
                                    </span>
                                    <div className='d-flex'
                                    style={{
                                        flexDirection:"column",
                                    }}>
                                        <span
                                        style={{
                                            fontSize:"14px"
                                        }}
                                        >Ahmed Mohamed</span>
                                        <span
                                        style={{
                                            fontSize:"11px",
                                            color:"var(--font-secondaryColor)"
                                        }}>Member</span>
                                    </div>
                                </div>
                                <CustomReactStars
                                    count={5}
                                    value={5}
                                    size={15}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className='commented'>
                                Nice Product I hope if there is yellow color.
                            </p>
                        </div>
                        <div className="comment">
                            <div className="commentHead d-flex"
                            style={{
                                justifyContent:"space-between"
                            }}>
                                <div className="d-flex gap-2"
                                style={{
                                    justifyContent:"center",
                                    alignItems:"center"
                                }}>
                                    <span style={{
                                        display:'flex',
                                        alignItems:"center",
                                        justifyContent:"center",
                                        width:"40px",
                                        height:"40px",
                                        borderRadius:"3px",
                                        border:"1px solid var(--color-borderLight)",
                                        fontSize:"18px"
                                    }}>
                                        <FaUser />
                                    </span>
                                    <div className='d-flex'
                                    style={{
                                        flexDirection:"column",
                                    }}>
                                        <span
                                        style={{
                                            fontSize:"14px"
                                        }}
                                        >Hamza Nayal</span>
                                        <span
                                        style={{
                                            fontSize:"11px",
                                            color:"var(--font-secondaryColor)"
                                        }}>Member</span>
                                    </div>
                                </div>
                                <CustomReactStars
                                    count={5}
                                    value={3}
                                    size={15}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className='commented'>
                                Not Bad Maybe I will buy in another time.
                            </p>
                        </div>
                        <div className="comment">
                            <div className="commentHead d-flex"
                            style={{
                                justifyContent:"space-between"
                            }}>
                                <div className="d-flex gap-2"
                                style={{
                                    justifyContent:"center",
                                    alignItems:"center"
                                }}>
                                    <span style={{
                                        display:'flex',
                                        alignItems:"center",
                                        justifyContent:"center",
                                        width:"40px",
                                        height:"40px",
                                        borderRadius:"3px",
                                        border:"1px solid var(--color-borderLight)",
                                        fontSize:"18px"
                                    }}>
                                        <FaUser />
                                    </span>
                                    <div className='d-flex'
                                    style={{
                                        flexDirection:"column",
                                    }}>
                                        <span
                                        style={{
                                            fontSize:"14px"
                                        }}
                                        >Bakr Abu Hasiba</span>
                                        <span
                                        style={{
                                            fontSize:"11px",
                                            color:"var(--font-secondaryColor)"
                                        }}>Member</span>
                                    </div>
                                </div>
                                <CustomReactStars
                                    count={5}
                                    value={4}
                                    size={15}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className='commented'>
                                I liked it, Simple and good colors. 
                            </p>
                        </div>
                        <div className="comment">
                            <div className="commentHead d-flex"
                            style={{
                                justifyContent:"space-between"
                            }}>
                                <div className="d-flex gap-2"
                                style={{
                                    justifyContent:"center",
                                    alignItems:"center"
                                }}>
                                    <span style={{
                                        display:'flex',
                                        alignItems:"center",
                                        justifyContent:"center",
                                        width:"40px",
                                        height:"40px",
                                        borderRadius:"3px",
                                        border:"1px solid var(--color-borderLight)",
                                        fontSize:"18px"
                                    }}>
                                        <FaUser />
                                    </span>
                                    <div className='d-flex'
                                    style={{
                                        flexDirection:"column",
                                    }}>
                                        <span
                                        style={{
                                            fontSize:"14px"
                                        }}
                                        >Hassan Ibrahem</span>
                                        <span
                                        style={{
                                            fontSize:"11px",
                                            color:"var(--font-secondaryColor)"
                                        }}>Member</span>
                                    </div>
                                </div>
                                <CustomReactStars
                                    count={5}
                                    value={4}
                                    size={15}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className='commented'>
                                I liked it, Simple and good colors. 
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
