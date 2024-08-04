// Import images for the items
import PoloMainFront from '../Assets/Images/Men/poloMT.jpg';
import PoloBlackFront from '../Assets/Images/Men/poloMT.jpg';
import PoloWhiteFront from '../Assets/Images/Men/poloMT.jpg';
import PoloGrayFront from '../Assets/Images/Men/poloMT.jpg';

import PoloMainBack from '../Assets/Images/Men/poloMT.jpg';
import PoloBlackBack from '../Assets/Images/Men/poloMT.jpg';
import PoloWhiteBack from '../Assets/Images/Men/poloMT.jpg';
import PoloGrayBack from '../Assets/Images/Men/poloMT.jpg';

import NikeMainFront from '../Assets/Images/Men/nikeMT.jpg';
import NikeBlackFront from '../Assets/Images/Men/nikeMT.jpg';
import NikeWhiteFront from '../Assets/Images/Men/nikeMT.jpg';
import NikeGrayFront from '../Assets/Images/Men/nikeMT.jpg';

import NikeMainBack from '../Assets/Images/Men/nikeMT.jpg';
import NikeBlackBack from '../Assets/Images/Men/nikeMT.jpg';
import NikeWhiteBack from '../Assets/Images/Men/nikeMT.jpg';
import NikeGrayBack from '../Assets/Images/Men/nikeMT.jpg';

import AdidasMainFront from '../Assets/Images/Men/adidasMT.jpg';
import AdidasBlackFront from '../Assets/Images/Men/adidasMT.jpg';
import AdidasWhiteFront from '../Assets/Images/Men/adidasMT.jpg';
import AdidasGrayFront from '../Assets/Images/Men/adidasMT.jpg';

import AdidasMainBack from '../Assets/Images/Men/adidasMT.jpg';
import AdidasBlackBack from '../Assets/Images/Men/adidasMT.jpg';
import AdidasWhiteBack from '../Assets/Images/Men/adidasMT.jpg';
import AdidasGrayBack from '../Assets/Images/Men/adidasMT.jpg';

import OverSizeMainFront from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeBlackFront from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeWhiteFront from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeGrayFront from '../Assets/Images/Men/over_sizeMT.jpg';

import OverSizeMainBack from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeBlackBack from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeWhiteBack from '../Assets/Images/Men/over_sizeMT.jpg';
import OverSizeGrayBack from '../Assets/Images/Men/over_sizeMT.jpg';

import BasicMainFront from '../Assets/Images/Men/basicMT.jpg';
import BasicMainBack from '../Assets/Images/Men/basicMT.jpg';

// Define the test data with unique IDs
const TestData = () => {
    return [
        {
            id: "item1",
            Path: "/Products/Men/T-Shirts#Polo",
            brand: "Polo",
            title: "Polo Slim",
            price: 300,
            sale: 249,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item2",
            Path: "/Products/Men/T-Shirts#Nike",
            brand: "Nike",
            title: "Nike Sport",
            price: 250,
            sale: 199,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item3",
            Path: "/Products/Men/T-Shirts#Adidas",
            brand: "Adidas",
            title: "Adidas Sport",
            price: 200,
            sale: 149,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item4",
            Path: "/Products/Men/T-Shirts#OverSize",
            brand: "OverSize",
            title: "Over Size",
            price: 300,
            sale: 249,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item5",
            Path: "/Products/Men/T-Shirts#Basic",
            brand: "Basic",
            title: "Basic",
            price: 200,
            sale: 149,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
                }
            },
            mainImgFront: BasicMainFront,
            mainImgBack: BasicMainBack,
            blackImgFront: BasicMainFront,
            blackImgBack: BasicMainBack,
            whiteImgFront: OverSizeWhiteFront,
            whiteImgBack: OverSizeWhiteBack,
            grayImgFront: OverSizeGrayFront,
            grayImgBack: OverSizeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },

        {
            id: "item6",
            Path: "/Products/Men/T-Shirts#Polo",
            brand: "Polo",
            title: "Polo Slim",
            price: 300,
            sale: 249,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item7",
            Path: "/Products/Men/T-Shirts#Nike",
            brand: "Nike",
            title: "Nike Sport",
            price: 250,
            sale: 199,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item8",
            Path: "/Products/Men/T-Shirts#Adidas",
            brand: "Adidas",
            title: "Adidas Sport",
            price: 200,
            sale: 149,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item9",
            Path: "/Products/Men/T-Shirts#OverSize",
            brand: "OverSize",
            title: "Over Size",
            price: 300,
            sale: 249,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item10",
            Path: "/Products/Men/T-Shirts#Basic",
            brand: "Basic",
            title: "Basic",
            price: 200,
            sale: 149,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
                }
            },
            mainImgFront: BasicMainFront,
            mainImgBack: BasicMainBack,
            blackImgFront: BasicMainFront,
            blackImgBack: BasicMainBack,
            whiteImgFront: OverSizeWhiteFront,
            whiteImgBack: OverSizeWhiteBack,
            grayImgFront: OverSizeGrayFront,
            grayImgBack: OverSizeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },

        {
            id: "item11",
            Path: "/Products/Men/T-Shirts#Basic",
            brand: "Basic",
            title: "Basic",
            price: 200,
            sale: 149,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
                }
            },
            mainImgFront: BasicMainFront,
            mainImgBack: BasicMainBack,
            blackImgFront: BasicMainFront,
            blackImgBack: BasicMainBack,
            whiteImgFront: OverSizeWhiteFront,
            whiteImgBack: OverSizeWhiteBack,
            grayImgFront: OverSizeGrayFront,
            grayImgBack: OverSizeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },

        {
            id: "item12",
            Path: "/Products/Men/T-Shirts#Polo",
            brand: "Polo",
            title: "Polo Slim",
            price: 300,
            sale: 249,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item13",
            Path: "/Products/Men/T-Shirts#Nike",
            brand: "Nike",
            title: "Nike Sport",
            price: 250,
            sale: 199,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item14",
            Path: "/Products/Men/T-Shirts#Adidas",
            brand: "Adidas",
            title: "Adidas Sport",
            price: 200,
            sale: 149,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item15",
            Path: "/Products/Men/T-Shirts#OverSize",
            brand: "OverSize",
            title: "Over Size",
            price: 300,
            sale: 249,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
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
            id: "item16",
            Path: "/Products/Men/T-Shirts#Basic",
            brand: "Basic",
            title: "Basic",
            price: 200,
            sale: 149,
            size: { s: "S", m: "M", l: "L", xl: "XL", xxl: "2XL", xxxl: "3XL" },
            color: {
                black: "Black",
                white: "White",
                gray: "Gray",
                red: "Red",
                mixed: {
                    BW: "Black & White",
                    BG: "Black & Gray",
                    WG: "White & Gray"
                }
            },
            mainImgFront: BasicMainFront,
            mainImgBack: BasicMainBack,
            blackImgFront: BasicMainFront,
            blackImgBack: BasicMainBack,
            whiteImgFront: OverSizeWhiteFront,
            whiteImgBack: OverSizeWhiteBack,
            grayImgFront: OverSizeGrayFront,
            grayImgBack: OverSizeGrayBack,
            redImgFront: PoloGrayFront,
            redImgBack: PoloGrayBack,
        },


    ];
}

export default TestData;
