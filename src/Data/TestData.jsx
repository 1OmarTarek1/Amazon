

//Item One
import PoloMainFront from '../Assets/Images/Men/poloMT.jpg';
import PoloBlackFront from '../Assets/Images/Men/poloMT.jpg';
import PoloWhiteFront from '../Assets/Images/Men/poloMT.jpg';
import PoloGrayFront from '../Assets/Images/Men/poloMT.jpg';

import PoloMainBack from '../Assets/Images/Men/poloMT.jpg';
import PoloBlackBack from '../Assets/Images/Men/poloMT.jpg';
import PoloWhiteBack from '../Assets/Images/Men/poloMT.jpg';
import PoloGrayBack from '../Assets/Images/Men/poloMT.jpg';



//Item Two
import NikeMainFront from '../Assets/Images/Men/nikeMT.jpg';
import NikeBlackFront from '../Assets/Images/Men/nikeMT.jpg';
import NikeWhiteFront from '../Assets/Images/Men/nikeMT.jpg';
import NikeGrayFront from '../Assets/Images/Men/nikeMT.jpg';

import NikeMainBack from '../Assets/Images/Men/nikeMT.jpg';
import NikeBlackBack from '../Assets/Images/Men/nikeMT.jpg';
import NikeWhiteBack from '../Assets/Images/Men/nikeMT.jpg';
import NikeGrayBack from '../Assets/Images/Men/nikeMT.jpg';



//Item Three
import AdidasMainFront from '../Assets/Images/Men/adidasMT.jpg';
import AdidasBlackFront from '../Assets/Images/Men/adidasMT.jpg';
import AdidasWhiteFront from '../Assets/Images/Men/adidasMT.jpg';
import AdidasGrayFront from '../Assets/Images/Men/adidasMT.jpg';

import AdidasMainBack from '../Assets/Images/Men/adidasMT.jpg';
import AdidasBlackBack from '../Assets/Images/Men/adidasMT.jpg';
import AdidasWhiteBack from '../Assets/Images/Men/adidasMT.jpg';
import AdidasGrayBack from '../Assets/Images/Men/adidasMT.jpg';



//Item Four
import OverSizeMainFront from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeBlackFront from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeWhiteFront from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeGrayFront from '../Assets/Images/Men/over_sizeMT.jpg';

import OverSizeMainBack from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeBlackBack from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeWhiteBack from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeGrayBack from '../Assets/Images/Men/over_sizeMT.jpg';

import BasicMainFront from '../Assets/Images/Men/basicMT.jpg';
import BasicMainkBack from '../Assets/Images/Men/basicMT.jpg';










const TestData = () => {
    return [
        {
            Path: "/Products/Men/T-Shirts#Polo",
            brand:"Polo",
            title:"Polo Slim",
            price:"300LE",
            sale:"249LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: PoloMainFront,
            mainImgBack: PoloMainBack,
            blackImgFront: PoloBlackFront,
            blackImgBack: PoloBlackBack,
            whiteImgFront: PoloWhiteFront,
            whiteImgBack: PoloWhiteBack,
            grayImgFront: PoloGrayFront,
            grayImgBack: PoloGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },


        {
            Path: "/Products/Men/T-Shirts#Nike",
            brand:"Nike",
            title:"Nike Sport",
            price:"250LE",
            sale:"199LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: NikeMainFront,
            mainImgBack: NikeMainBack,
            blackImgFront: NikeBlackFront,
            blackImgBack: NikeBlackBack,
            whiteImgFront: NikeWhiteFront,
            whiteImgBack: NikeWhiteBack,
            grayImgFront: NikeGrayFront,
            grayImgBack: NikeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },


        {
            Path: "/Products/Men/T-Shirts#Adidas",
            brand:"Adidas",
            title:"Adidas Sport",
            price:"200LE",
            sale:"149LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: AdidasMainFront,
            mainImgBack: AdidasMainBack,
            blackImgFront: AdidasBlackFront,
            blackImgBack: AdidasBlackBack,
            whiteImgFront: AdidasWhiteFront,
            whiteImgBack: AdidasWhiteBack,
            grayImgFront: AdidasGrayFront,
            grayImgBack: AdidasGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },


        {
            Path: "/Products/Men/T-Shirts#OverSize",
            brand:"OverSize",
            title:"Over Size",
            price:"300LE",
            sale:"249LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: OverSizeMainFront,
            mainImgBack: OverSizeMainBack,
            blackImgFront: OverSizeBlackFront,
            blackImgBack: OverSizeBlackBack,
            whiteImgFront: OverSizeWhiteFront,
            whiteImgBack: OverSizeWhiteBack,
            grayImgFront: OverSizeGrayFront,
            grayImgBack: OverSizeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },



        {
            Path: "/Products/Men/T-Shirts#Basic",
            brand:"Basic",
            title:"Basic",
            price:"200LE",
            sale:"149LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: BasicMainFront,
            mainImgBack: BasicMainkBack,
            blackImgFront: BasicMainFront,
            blackImgBack: BasicMainkBack,
            whiteImgFront: OverSizeWhiteFront,
            whiteImgBack: OverSizeWhiteBack,
            grayImgFront: OverSizeGrayFront,
            grayImgBack: OverSizeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },




        {
            Path: "/Products/Men/T-Shirts#Polo",
            brand:"Polo",
            title:"Polo Slim",
            price:"300LE",
            sale:"249LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: PoloMainFront,
            mainImgBack: PoloMainBack,
            blackImgFront: PoloBlackFront,
            blackImgBack: PoloBlackBack,
            whiteImgFront: PoloWhiteFront,
            whiteImgBack: PoloWhiteBack,
            grayImgFront: PoloGrayFront,
            grayImgBack: PoloGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },


        {
            Path: "/Products/Men/T-Shirts#Nike",
            brand:"Nike",
            title:"Nike Sport",
            price:"250LE",
            sale:"199LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: NikeMainFront,
            mainImgBack: NikeMainBack,
            blackImgFront: NikeBlackFront,
            blackImgBack: NikeBlackBack,
            whiteImgFront: NikeWhiteFront,
            whiteImgBack: NikeWhiteBack,
            grayImgFront: NikeGrayFront,
            grayImgBack: NikeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },


        {
            Path: "/Products/Men/T-Shirts#Adidas",
            brand:"Adidas",
            title:"Adidas Sport",
            price:"200LE",
            sale:"149LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: AdidasMainFront,
            mainImgBack: AdidasMainBack,
            blackImgFront: AdidasBlackFront,
            blackImgBack: AdidasBlackBack,
            whiteImgFront: AdidasWhiteFront,
            whiteImgBack: AdidasWhiteBack,
            grayImgFront: AdidasGrayFront,
            grayImgBack: AdidasGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },


        {
            Path: "/Products/Men/T-Shirts#OverSize",
            brand:"OverSize",
            title:"Over Size",
            price:"300LE",
            sale:"249LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: OverSizeMainFront,
            mainImgBack: OverSizeMainBack,
            blackImgFront: OverSizeBlackFront,
            blackImgBack: OverSizeBlackBack,
            whiteImgFront: OverSizeWhiteFront,
            whiteImgBack: OverSizeWhiteBack,
            grayImgFront: OverSizeGrayFront,
            grayImgBack: OverSizeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },



        {
            Path: "/Products/Men/T-Shirts#Basic",
            brand:"Basic",
            title:"Basic",
            price:"200LE",
            sale:"149LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: BasicMainFront,
            mainImgBack: BasicMainkBack,
            blackImgFront: BasicMainFront,
            blackImgBack: BasicMainkBack,
            whiteImgFront: OverSizeWhiteFront,
            whiteImgBack: OverSizeWhiteBack,
            grayImgFront: OverSizeGrayFront,
            grayImgBack: OverSizeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },


        {
            Path: "/Products/Men/T-Shirts#Polo",
            brand:"Polo",
            title:"Polo Slim",
            price:"300LE",
            sale:"249LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: PoloMainFront,
            mainImgBack: PoloMainBack,
            blackImgFront: PoloBlackFront,
            blackImgBack: PoloBlackBack,
            whiteImgFront: PoloWhiteFront,
            whiteImgBack: PoloWhiteBack,
            grayImgFront: PoloGrayFront,
            grayImgBack: PoloGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },


        {
            Path: "/Products/Men/T-Shirts#Polo",
            brand:"Polo",
            title:"Polo Slim",
            price:"300LE",
            sale:"249LE",
            size:{ s:"S", m:"M", l:"L", xl:"XL", xxl:"2XL", xxxl:"3XL"},
            color:{
                black:"Black",
                white:"White",
                gray:"Gray",
                red:"Red",
                mixed:{
                    BW:"Black & White",
                    BG:"Black & Gray",
                    WG:"White & Gray"
                }
            },
            mainImgFront: PoloMainFront,
            mainImgBack: PoloMainBack,
            blackImgFront: PoloBlackFront,
            blackImgBack: PoloBlackBack,
            whiteImgFront: PoloWhiteFront,
            whiteImgBack: PoloWhiteBack,
            grayImgFront: PoloGrayFront,
            grayImgBack: PoloGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },
    ];
} 



export default TestData;
