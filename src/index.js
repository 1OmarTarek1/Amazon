import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'aos/dist/aos.css'; 
import App from './App.jsx';
import { ThemeProvider } from './Components/ThemeProvider/ThemeProvider.jsx';
import { FavoritesProvider } from './Components/FavoritesPageComponents/FavoritesContext/FavoritesContext.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './Components/i18n/i18n';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { CartProvider } from './Components/AddToCartComponents/CartContext/CartContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider>
                <CartProvider>
                    <FavoritesProvider>
                        <Router basename='Amazon'>
                            <App />
                        </Router>
                    </FavoritesProvider>
                </CartProvider>
            </ThemeProvider>
        </I18nextProvider>
    </React.StrictMode>
);
