import { FaHeart } from 'react-icons/fa6'
import { MDBBtn } from 'mdb-react-ui-kit'
import './LikeBtn.css'





const LikeBtn = ({handleToggleFavorites, isFavorited}) => {
    return (
        <div className="placement">
            <MDBBtn
            className={`headBtn favorite-button ${isFavorited ? 'active' : ''}`}
            onClick={handleToggleFavorites}
            >
                <FaHeart />
            </MDBBtn>
        </div>
    )
}

export default LikeBtn