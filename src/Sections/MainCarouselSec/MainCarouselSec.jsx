import Slider from "react-slick"; 
import { CarouselItem } from '../../Components';
import './MainCarouselSec.css'






const MainCarouselSec = ( props ) => {
    const Items = props.items.map((item, index) => {
        return <CarouselItem key={index} 
        title={item.title} 
        path={item.path}
        img={item.img}
        />
    });

    const settings = {
        dots: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: false,
        // className: "slider variable-width",
        // variableWidth: true
        // lazyLoad: true,
        // infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
        ]
    };
    return (
        <div className={`MainCarouselSec ${props.cla}`} id={props.iD}>
            <Slider {...settings}> 
                {Items}
            </Slider>
        </div>
    )
}

export default MainCarouselSec