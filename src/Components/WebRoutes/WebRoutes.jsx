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
    PantsPage
} from '../../Pages';
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
                    <Route path="Pants" element={<PantsPage />} />
                </Route>

                <Route path="Women" element={<HumansLayout />}>
                    <Route index element={<WomenPage />} />
                    <Route path="Pants" element={<PantsPage />} />
                </Route>

                <Route path="Boys" element={<HumansLayout />}>
                    <Route index element={<BoysPage />} />
                    <Route path="Pants" element={<PantsPage />} />
                </Route>

                <Route path="Girls" element={<HumansLayout />}>
                    <Route index element={<GirlsPage />} />
                    <Route path="Pants" element={<PantsPage />} />
                </Route>
            </Route>

        </Routes>
    );
};

export default WebRoutes;



