// main imports


// ======================= M-E-N ======================= //
// Men Title Images
import T_Shirts from '../Assets/Images/Men/T_Shirts.jpg';
import Pants from '../Assets/Images/Men/Pants.jpg';
import Shoes from '../Assets/Images/Men/Shoes.jpg';
import Other from '../Assets/Images/Men/Other.jpg';
// Men T-Shirts Images
import PoloMT from '../Assets/Images/Men/poloMT.jpg';
import NikeMT from '../Assets/Images/Men/nikeMT.jpg';
import AdidasMT from '../Assets/Images/Men/adidasMT.jpg';
import Over_SizeMT from '../Assets/Images/Men/over_sizeMT.jpg';
import BasicMT from '../Assets/Images/Men/basicMT.jpg';
// Men Pants Images
import NikeMP from '../Assets/Images/Men/nikeMP.jpg';
import AdidasMP from '../Assets/Images/Men/adidasMP.jpg';
import BaggyMT from '../Assets/Images/Men/baggyMP.jpg';
import Over_SizeMP from '../Assets/Images/Men/over_sizeMP.jpg';
import BasicMP from '../Assets/Images/Men/basicMP.jpg';
// Men Shoes Images 
import ClassicMSh from '../Assets/Images/Men/classicMSh.jpg';
import NikeMSh from '../Assets/Images/Men/nikeMSh.jpg';
import AdidasMSh from '../Assets/Images/Men/adidasMSh.jpg';
import BootsMSh from '../Assets/Images/Men/bootsMSh.jpg';
import BasicMSh from '../Assets/Images/Men/basicMSh.jpg';
// Men Other Images
import SlippersMO from '../Assets/Images/Men/slippersMO.jpg';
import SocksMO from '../Assets/Images/Men/socksMO.jpg';
import CapsMO from '../Assets/Images/Men/capsMO.jpg';
import BagsMO from '../Assets/Images/Men/bagsMO.jpg';
import AccessoryMO from '../Assets/Images/Men/accessoryMO.jpg';




// ======================= W-O-M-E-N ======================= //
// Women Title Images
import T_ShirtsWT from '../Assets/Images/Women/T_Shirts.jpg';
import PantsWP from '../Assets/Images/Women/Pants.jpg';
import ShoesWSh from '../Assets/Images/Women/Shoes.jpg';
import OtherWO from '../Assets/Images/Women/Other.jpg';
// Women T-Shirts Images
import PlusWT from '../Assets/Images/Women/plusWT.jpg';
import NikeWT from '../Assets/Images/Women/nikeWT.jpg';
import AdidasWT from '../Assets/Images/Women/adidasWT.jpg';
import DressesWT from '../Assets/Images/Women/dressesWT.jpg';
import BasicWT from '../Assets/Images/Women/basicWT.jpg';
// Women Pants Images
import NikeWP from '../Assets/Images/Women/nikeWP.jpg';
import AdidasWP from '../Assets/Images/Women/adidasWP.jpg';
import baggyWP from '../Assets/Images/Women/baggyWP.jpg';
import Over_SizeWP from '../Assets/Images/Women/OverSizeWP.jpg';
import ClassicWP from '../Assets/Images/Women/classicWP.jpg';
// Women Shoes Images 
import ClassicWSh from '../Assets/Images/Women/classicWSh.jpg';
import NikeWSh from '../Assets/Images/Women/nikeWSh.jpg';
import AdidasWSh from '../Assets/Images/Women/adidasWSh.jpg';
import BootsWSh from '../Assets/Images/Women/bootsWSh.jpg';
import BasicWSh from '../Assets/Images/Women/basicWSh.jpg';
// Women Other Images
import SlippersWO from '../Assets/Images/Women/slippersWO.jpg';
import SocksWO from '../Assets/Images/Women/socksWO.jpg';
import CapsWO from '../Assets/Images/Women/capsWO.jpg';
import BagsWO from '../Assets/Images/Women/bagsWO.jpg';
import AccessoryWO from '../Assets/Images/Women/accessoryWO.jpg';





// ======================= B-O-Y-S ======================= //
// Boys Title Images
import T_ShirtsBT from '../Assets/Images/Boys/T_Shirts.jpg';
import PantsBP from '../Assets/Images/Boys/Pants.jpg';
import ShoesBSh from '../Assets/Images/Boys/Shoes.jpg';
import OtherBO from '../Assets/Images/Boys/Other.jpg';





// ======================= G-I-R-L-S ======================= //
// Girls Title Images
import T_ShirtsGT from '../Assets/Images/Girls/T_Shirts.jpg';
import PantsGP from '../Assets/Images/Girls/Pants.jpg';
import ShoesGSh from '../Assets/Images/Girls/Shoes.jpg';
import OtherGO from '../Assets/Images/Girls/Other.jpg';



// const { t } = useTranslation();

const CategoryTitlesData = (t) => {
    return [
        {
            category: t('categoryData.men'),
            gender: true,
            catPath: '/Products/Men',
            divClass:'MenCarousel',
            items: [
                {   
                    path: '/Products/Men/T-Shirts',
                    title: t('categoryData.tShirts'),
                    img: T_Shirts,
                    divClass: "T_Shirts-Carousel",
                    nestedItems: [
                        {
                            title: "Polo",
                            img: PoloMT,
                            path:"/Products/Men/T-Shirts#Polo"
                        },
                        {
                            title: "Nike",
                            img: NikeMT,
                            path:"/Products/Men/T-Shirts#Nike"
                        },
                        {
                            title: "Adidas",
                            img: AdidasMT,
                            path:"/Products/Men/T-Shirts#Adidas"
                        },
                        {
                            title: "Over Size",
                            img: Over_SizeMT,
                            path:"/Products/Men/T-Shirts#Over_Size"
                        },
                        {
                            title: "Basic",
                            img: BasicMT,
                            path:"/Products/Men/T-Shirts#Basic"
                        },
                    ]
                },
        
                {
                    path: '/Products/Men/Pants',
                    title: t('categoryData.pants'),
                    img: Pants,
                    divClass: "Pants-Carousel",
                    nestedItems: [
                        {
                            title: "Nike",
                            img: NikeMP,
                            path:"/Products/Men/Pants#Nike"
                        },
                        {
                            title: "Adidas",
                            img: AdidasMP,
                            path:"/Products/Men/Pants#brandName2"
                        },
                        {
                            title: "Baggy",
                            img: BaggyMT,
                            path:"/Products/Men/Pants#Baggy"
                        },
                        {
                            title: "Over Size",
                            img: Over_SizeMP,
                            path:"/Products/Men/Pants#Over_Size"
                        },
                        {
                            title: "Basic",
                            img: BasicMP,
                            path:"/Products/Men/Pants#Basic"
                        },
                    ]
                },
        
                {
                    path: '/Products/Men/Shoes',
                    title: t('categoryData.shoes'),
                    img: Shoes,
                    divClass: "Shoes-Carousel",
                    nestedItems: [
                        {
                            title: "Classic",
                            img: ClassicMSh,
                            path:"/Products/Men/Shoes#Classic"
                        },
                        {
                            title: "Nike",
                            img: NikeMSh,
                            path:"/Products/Men/Shoes#Nike"
                        },
                        {
                            title: "Adidas",
                            img: AdidasMSh,
                            path:"/Products/Men/Shoes#Adidas"
                        },
                        {
                            title: "Boots",
                            img: BootsMSh,
                            path:"/Products/Men/Shoes#Boots"
                        },
                        {
                            title: "Basic",
                            img: BasicMSh,
                            path:"/Products/Men/Shoes#Basic"
                        },
                    ]
                },
                
                {
                    path: '/Products/Men/Other',
                    title: t('categoryData.other'),
                    img: Other,
                    divClass: "Other-Carousel",
                    nestedItems: [
                        {
                            title: "Slippers",
                            img: SlippersMO,
                            path:"/Products/Men/Other#Slippers"
                        },
                        {
                            title: "Socks",
                            img: SocksMO,
                            path:"/Products/Men/Other#Socks"
                        },
                        {
                            title: "Caps",
                            img: CapsMO,
                            path:"/Products/Men/Other#Caps"
                        },
                        {
                            title: "Bags",
                            img: BagsMO,
                            path:"/Products/Men/Other#Bags"
                        },
                        {
                            title: "Accessory",
                            img: AccessoryMO,
                            path:"/Products/Men/Other#Accessory"
                        },
                    ]
                },
            ],
        },
        
        
        {
            category: t('categoryData.women'),
            gender: false,
            catPath: '/Products/Women',
            divClass:'WomenCarousel',
            items: [
                {
                    path: '/Products/Women/T-Shirts',
                    title: t('categoryData.tShirts'),
                    img: T_ShirtsWT,
                    divClass: "T_Shirts-Carousel",
                    nestedItems: [
                        {
                            title: "Pluses",
                            img: PlusWT,
                            path:"/Products/Women/T-Shirts#Pluses"
                        },
                        {
                            title: "Dresses",
                            img: DressesWT,
                            path:"/Products/Women/T-Shirts#brandName4"
                        },
                        {
                            title: "Basic",
                            img: BasicWT,
                            path:"/Products/Women/T-Shirts#brandName5"
                        },
                        {
                            title: "Adidas",
                            img: AdidasWT,
                            path:"/Products/Women/T-Shirts#brandName3"
                        },
                        {
                            title: "Nike",
                            img: NikeWT,
                            path:"/Products/Women/Pants/Nike"
                        }
                    ]
                },
        
                {
                    path: '/Products/Women/Pants',
                    title: t('categoryData.pants'),
                    img: PantsWP,
                    divClass: "Pants-Carousel",
                    nestedItems: [
                        {
                            title: "Classic",
                            img: ClassicWP,
                            path:"/Products/Women/Pants#Classic"
                        },
                        {
                            title: "Baggy",
                            img: baggyWP,
                            path:"/Products/Women/Pants#Baggy"
                        },
                        {
                            title: "Over Size",
                            img: Over_SizeWP,
                            path:"/Products/Women/Pants#OverSize"
                        },
                        {
                            title: "Adidas",
                            img: AdidasWP,
                            path:"/Products/Women/Pants#Adidas"
                        },
                        {
                            title: "Nike",
                            img: NikeWP,
                            path:"/Products/Women/Pants#Nike"
                        }
                    ]
                },
        
                {
                    path: '/Products/Women/Shoes',
                    title: t('categoryData.shoes'),
                    img: ShoesWSh,
                    divClass: "Shoes-Carousel",
                    nestedItems: [
                        {
                            title: "Boots",
                            img: BootsWSh,
                            path:"/Products/Women/Shoes#Boots"
                        },
                        {
                            title: "Classic",
                            img: ClassicWSh,
                            path:"/Products/Women/Shoes#Classic"
                        },
                        {
                            title: "Basic",
                            img: BasicWSh,
                            path:"/Products/Women/Shoes#Basic"
                        },
                        {
                            title: "Adidas",
                            img: AdidasWSh,
                            path:"/Products/Women/Shoes#Adidas"
                        },
                        {
                            title: "Nike",
                            img: NikeWSh,
                            path:"/Products/Women/Shoes#Nike"
                        },
                    ]
                },
        
                {
                    path: '/Products/Women/Other',
                    title: t('categoryData.other'),
                    img: OtherWO,
                    divClass: "Other-Carousel",
                    nestedItems: [
                        {
                            title: "Slippers",
                            img: SlippersWO,
                            path:"/Products/Women/Other#Slippers"
                        },
                        {
                            title: "Socks",
                            img: SocksWO,
                            path:"/Products/Women/Other#Socks"
                        },
                        {
                            title: "Caps",
                            img: CapsWO,
                            path:"/Products/Women/Other#Caps"
                        },
                        {
                            title: "Bags",
                            img: BagsWO,
                            path:"/Products/Women/Other#Bags"
                        },
                        {
                            title: "Accessory",
                            img: AccessoryWO,
                            path:"/Products/Women/Other#Accessory"
                        },
                    ]
                },
            ],
        },
        
        
        {
            category: t('categoryData.boys'),
            gender: true,
            catPath: '/Products/Boys',
            divClass:'BoysCarousel',
            items: [
                {   
                    path: '/Products/Boys/T-Shirts',
                    title: t('categoryData.tShirts'),
                    img: T_ShirtsBT,
                    divClass: "T_Shirts-Carousel",
                    nestedItems: [
                        {
                            title: "Polo",
                            img: PoloMT,
                            path:"/Products/Boys/T-Shirts#Polo"
                        },
                        {
                            title: "Nike",
                            img: NikeMT,
                            path:"/Products/Boys/T-Shirts#Nike"
                        },
                        {
                            title: "Adidas",
                            img: AdidasMT,
                            path:"/Products/Boys/T-Shirts#Adidas"
                        },
                        {
                            title: "Over Size",
                            img: Over_SizeMT,
                            path:"/Products/Boys/T-Shirts#Over_Size"
                        },
                        {
                            title: "Basic",
                            img: BasicMT,
                            path:"/Products/Boys/T-Shirts#Basic"
                        },
                    ]
                },
        
                {
                    path: '/Products/Boys/Pants',
                    title: t('categoryData.pants'),
                    img: PantsBP,
                    divClass: "Pants-Carousel",
                    nestedItems: [
                        {
                            title: "Nike",
                            img: NikeMP,
                            path:"/Products/Boys/Pants#Nike"
                        },
                        {
                            title: "Adidas",
                            img: AdidasMP,
                            path:"/Products/Boys/Pants#brandName2"
                        },
                        {
                            title: "Baggy",
                            img: BaggyMT,
                            path:"/Products/Boys/Pants#Baggy"
                        },
                        {
                            title: "Over Size",
                            img: Over_SizeMP,
                            path:"/Products/Boys/Pants#Over_Size"
                        },
                        {
                            title: "Basic",
                            img: BasicMP,
                            path:"/Products/Boys/Pants#Basic"
                        },
                    ]
                },
        
                {
                    path: '/Products/Boys/Shoes',
                    title: t('categoryData.shoes'),
                    img: ShoesBSh,
                    divClass: "Shoes-Carousel",
                    nestedItems: [
                        {
                            title: "Classic",
                            img: ClassicMSh,
                            path:"/Products/Boys/Shoes#Classic"
                        },
                        {
                            title: "Nike",
                            img: NikeMSh,
                            path:"/Products/Boys/Shoes#Nike"
                        },
                        {
                            title: "Adidas",
                            img: AdidasMSh,
                            path:"/Products/Boys/Shoes#Adidas"
                        },
                        {
                            title: "Boots",
                            img: BootsMSh,
                            path:"/Products/Boys/Shoes#Boots"
                        },
                        {
                            title: "Basic",
                            img: BasicMSh,
                            path:"/Products/Boys/Shoes#Basic"
                        },
                    ]
                },
                
                {
                    path: '/Products/Boys/Other',
                    title: t('categoryData.other'),
                    img: OtherBO,
                    divClass: "Other-Carousel",
                    nestedItems: [
                        {
                            title: "Slippers",
                            img: SlippersMO,
                            path:"/Products/Boys/Other#Slippers"
                        },
                        {
                            title: "Socks",
                            img: SocksMO,
                            path:"/Products/Boys/Other#Socks"
                        },
                        {
                            title: "Caps",
                            img: CapsMO,
                            path:"/Products/Boys/Other#Caps"
                        },
                        {
                            title: "Bags",
                            img: BagsMO,
                            path:"/Products/Boys/Other#Bags"
                        },
                        {
                            title: "Accessory",
                            img: AccessoryMO,
                            path:"/Products/Boys/Other#Accessory"
                        },
                    ]
                },
            ],
        },
        
        
        {
            category: t('categoryData.girls'),
            gender: false,
            catPath: '/Products/Girls',
            divClass:'GirlsCarousel',
            items: [
                {   
                    path: '/Products/Girls/T-Shirts',
                    title: t('categoryData.tShirts'),
                    img: T_ShirtsGT,
                    divClass: "T_Shirts-Carousel",
                    nestedItems: [
                        {
                            title: "Pluses",
                            img: PlusWT,
                            path:"/Products/Girls/T-Shirts#Pluses"
                        },
                        {
                            title: "Dresses",
                            img: DressesWT,
                            path:"/Products/Girls/T-Shirts#brandName4"
                        },
                        {
                            title: "Basic",
                            img: BasicWT,
                            path:"/Products/Girls/T-Shirts#brandName5"
                        },
                        {
                            title: "Adidas",
                            img: AdidasWT,
                            path:"/Products/Girls/T-Shirts#brandName3"
                        },
                        {
                            title: "Nike",
                            img: NikeWT,
                            path:"/Products/Girls/Pants/Nike"
                        }
                    ]
                },
        
                {
                    path: '/Products/Girls/Pants',
                    title: t('categoryData.pants'),
                    img: PantsGP,
                    divClass: "Pants-Carousel",
                    nestedItems: [
                        {
                            title: "Classic",
                            img: ClassicWP,
                            path:"/Products/Girls/Pants#Classic"
                        },
                        {
                            title: "Baggy",
                            img: baggyWP,
                            path:"/Products/Girls/Pants#Baggy"
                        },
                        {
                            title: "Over Size",
                            img: Over_SizeWP,
                            path:"/Products/Girls/Pants#OverSize"
                        },
                        {
                            title: "Adidas",
                            img: AdidasWP,
                            path:"/Products/Girls/Pants#Adidas"
                        },
                        {
                            title: "Nike",
                            img: NikeWP,
                            path:"/Products/Girls/Pants#Nike"
                        }
                    ]
                },
        
                {
                    path: '/Products/Girls/Shoes',
                    title: t('categoryData.shoes'),
                    img: ShoesGSh,
                    divClass: "Shoes-Carousel",
                    nestedItems: [
                        {
                            title: "Boots",
                            img: BootsWSh,
                            path:"/Products/Girls/Shoes#Boots"
                        },
                        {
                            title: "Classic",
                            img: ClassicWSh,
                            path:"/Products/Girls/Shoes#Classic"
                        },
                        {
                            title: "Basic",
                            img: BasicWSh,
                            path:"/Products/Girls/Shoes#Basic"
                        },
                        {
                            title: "Adidas",
                            img: AdidasWSh,
                            path:"/Products/Girls/Shoes#Adidas"
                        },
                        {
                            title: "Nike",
                            img: NikeWSh,
                            path:"/Products/Girls/Shoes#Nike"
                        },
                    ]
                },
                
                {
                    path: '/Products/Girls/Other',
                    title: t('categoryData.other'),
                    img: OtherGO,
                    divClass: "Other-Carousel",
                    nestedItems: [
                        {
                            title: "Slippers",
                            img: SlippersWO,
                            path:"/Products/Girls/Other#Slippers"
                        },
                        {
                            title: "Socks",
                            img: SocksWO,
                            path:"/Products/Girls/Other#Socks"
                        },
                        {
                            title: "Caps",
                            img: CapsWO,
                            path:"/Products/Girls/Other#Caps"
                        },
                        {
                            title: "Bags",
                            img: BagsWO,
                            path:"/Products/Girls/Other#Bags"
                        },
                        {
                            title: "Accessory",
                            img: AccessoryWO,
                            path:"/Products/Girls/Other#Accessory"
                        },
                    ]
                },
            ],
        },
    ];
} 



export default CategoryTitlesData;
