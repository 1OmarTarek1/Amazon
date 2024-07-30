import { Routes, Route } from 'react-router-dom';
import { 
    HomePage, 
    ProfilePage, 
    NotificationsPage,
    MyShopPage,
    FavoritesPage,
    SettingsPage,
    HumansPage,
    ProductPage,
    DetailsPage
} from '../../Pages';

import { CategoryLayout } from '../../Components';

const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/Notifications" element={<NotificationsPage />} />
            <Route path="/MyShop" element={<MyShopPage />} />
            <Route path="/Favorites" element={<FavoritesPage />} />
            <Route path="/Settings" element={<SettingsPage />} />
            
            <Route path="/Products" element={<CategoryLayout />}>
                <Route path="Men" element={<HumansPage />} />
                <Route path="Women" element={<HumansPage />} />
                <Route path="Boys" element={<HumansPage />} />
                <Route path="Girls" element={<HumansPage />} />
            </Route>

            {/* Products Pages */}
                {/* Men Product */}
                <Route path="/Products/Men/T-Shirts" element={<ProductPage />} />
                <Route path="/Products/Men/Pants" element={<ProductPage />} />
                <Route path="/Products/Men/Shoes" element={<ProductPage />} />
                <Route path="/Products/Men/Other" element={<ProductPage />} />
                {/* Women Product */}
                <Route path="/Products/Women/T-Shirts" element={<ProductPage />} />
                <Route path="/Products/Women/Pants" element={<ProductPage />} />
                <Route path="/Products/Women/Shoes" element={<ProductPage />} />
                <Route path="/Products/Women/Other" element={<ProductPage />} />
                {/* Boys Product */}
                <Route path="/Products/Boys/T-Shirts" element={<ProductPage />} />
                <Route path="/Products/Boys/Pants" element={<ProductPage />} />
                <Route path="/Products/Boys/Shoes" element={<ProductPage />} />
                <Route path="/Products/Boys/Other" element={<ProductPage />} />
                {/* Girls Product */}
                <Route path="/Products/Girls/T-Shirts" element={<ProductPage />} />
                <Route path="/Products/Girls/Pants" element={<ProductPage />} />
                <Route path="/Products/Girls/Shoes" element={<ProductPage />} />
                <Route path="/Products/Girls/Other" element={<ProductPage />} />
            {/* Products Pages */}

            <Route path="/Products/ProductDetails" element={<DetailsPage />} />

            <Route 
            path="*" 
            element={<div 
            style={{
                height:"100vh",
                display:"grid",
                placeItems:"center",
                textTransform:"uppercase",
                fontWeight:"bold",
                color:"var(--bg-component)",
                fontSize:"clamp(2rem, 5vw, 5rem)"
            }
            }>
                Page Not Found 
            </div>}/>

        </Routes>
    );
};

export default WebRoutes;


// import { Routes, Route } from 'react-router-dom';
// import { 
//     HomePage, 
//     ProfilePage, 
//     NotificationsPage,
//     MyShopPage,
//     FavoritesPage,
//     SettingsPage,
//     HumansPage,
//     ProductPage
// } from '../../Pages';

// import { CategoryLayout } from '../../Components';

// const WebRoutes = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/Profile" element={<ProfilePage />} />
//             <Route path="/Notifications" element={<NotificationsPage />} />
//             <Route path="/MyShop" element={<MyShopPage />} />
//             <Route path="/Favorites" element={<FavoritesPage />} />
//             <Route path="/Settings" element={<SettingsPage />} />
            
//             {/* Routes for categories */}
//             <Route path="/Products" element={<CategoryLayout />}>
//                 <Route path="Men" element={<HumansPage />}>
//                     {/* Product routes specific to Men */}
//                     <Route path="T-Shirts" element={<ProductPage />} />
//                     <Route path="Pants" element={<ProductPage />} />
//                     <Route path="Shoes" element={<ProductPage />} />
//                     <Route path="Other" element={<ProductPage />} />
//                 </Route>
//                 <Route path="Women" element={<HumansPage />}>
//                     {/* Product routes specific to Women */}
//                     <Route path="T-Shirts" element={<ProductPage />} />
//                     <Route path="Pants" element={<ProductPage />} />
//                     <Route path="Shoes" element={<ProductPage />} />
//                     <Route path="Other" element={<ProductPage />} />
//                 </Route>
//                 <Route path="Boys" element={<HumansPage />}>
//                     {/* Product routes specific to Boys */}
//                     <Route path="T-Shirts" element={<ProductPage />} />
//                     <Route path="Pants" element={<ProductPage />} />
//                     <Route path="Shoes" element={<ProductPage />} />
//                     <Route path="Other" element={<ProductPage />} />
//                 </Route>
//                 <Route path="Girls" element={<HumansPage />}>
//                     {/* Product routes specific to Girls */}
//                     <Route path="T-Shirts" element={<ProductPage />} />
//                     <Route path="Pants" element={<ProductPage />} />
//                     <Route path="Shoes" element={<ProductPage />} />
//                     <Route path="Other" element={<ProductPage />} />
//                 </Route>
//             </Route>

//             {/* Define fallback route or 404 page */}
//             <Route path="*" element={<div>Page Not Found</div>} />
//         </Routes>
//     );
// };

// export default WebRoutes;




