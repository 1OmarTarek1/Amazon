import { Routes, Route } from 'react-router-dom';
import { 
    HomePage, 
    ProfilePage, 
    NotificationsPage,
    MyShopPage,
    FavoritesPage,
    SettingsPage,
    BoysPage, 
    GirlsPage, 
    MenPage, 
    WomenPage, 
} from '../../Pages';

import { TshirtsMPage, PantsMPage, ShoesMPage, OtherMPage } from '../../Pages/ProductsPages/MenPage';
import { TshirtsWPage, PantsWPage, ShoesWPage, OtherWPage } from '../../Pages/ProductsPages/WomenPage';
import { TshirtsBPage, PantsBPage, ShoesBPage, OtherBPage } from '../../Pages/ProductsPages/BoysPage';
import { TshirtsGPage, PantsGPage, ShoesGPage, OtherGPage } from '../../Pages/ProductsPages/GirlsPage';

import { CategoryLayout, HumansLayout } from '../../Components';

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
                <Route path="Men" element={<HumansLayout />}>
                    <Route index element={<MenPage />} />
                    <Route path="T-Shirts" element={<TshirtsMPage />} />
                    <Route path="Pants" element={<PantsMPage />} />
                    <Route path="Shoes" element={<ShoesMPage />} />
                    <Route path="Other" element={<OtherMPage />} />
                </Route>

                <Route path="Women" element={<HumansLayout />}>
                    <Route index element={<WomenPage />} />
                    <Route path="T-Shirts" element={<TshirtsWPage />} />
                    <Route path="Pants" element={<PantsWPage />} />
                    <Route path="Shoes" element={<ShoesWPage />} />
                    <Route path="Other" element={<OtherWPage />} />
                </Route>

                <Route path="Boys" element={<HumansLayout />}>
                    <Route index element={<BoysPage />} />
                    <Route path="T-Shirts" element={<TshirtsBPage />} />
                    <Route path="Pants" element={<PantsBPage />} />
                    <Route path="Shoes" element={<ShoesBPage />} />
                    <Route path="Other" element={<OtherBPage />} />
                </Route>

                <Route path="Girls" element={<HumansLayout />}>
                    <Route index element={<GirlsPage />} />
                    <Route path="T-Shirts" element={<TshirtsGPage />} />
                    <Route path="Pants" element={<PantsGPage />} />
                    <Route path="Shoes" element={<ShoesGPage />} />
                    <Route path="Other" element={<OtherGPage />} />
                </Route>
            </Route>

        </Routes>
    );
};

export default WebRoutes;



