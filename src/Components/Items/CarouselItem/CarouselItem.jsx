import { NavLink } from 'react-router-dom'
import './CarouselItem.css'






const CarouselItem = ( props ) => {
    return (
        <NavLink to={props.path} className="carouselItem">
            <div className="itemTitle">
                {props.title}
            </div>
            <div className="imgWrapper">
                <img src={props.img} alt={props.title} />
            </div>
        </NavLink>
    )
}

export default CarouselItem