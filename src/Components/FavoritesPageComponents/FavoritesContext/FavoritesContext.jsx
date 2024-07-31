import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorites = (product) => {
        setFavorites((prevFavorites) => {
            // Check if the product is already in the favorites list
            const isAlreadyFavorited = prevFavorites.some((item) => item.id === product.id);
            
            if (isAlreadyFavorited) {
                // Remove the product from favorites
                return prevFavorites.filter((item) => item.id !== product.id);
            } else {
                // Add the product to favorites
                return [...prevFavorites, product];
            }
        });
    };

    const isFavorite = (productId) => {
        return favorites.some((product) => product.id === productId);
    };

    const clearFavorites = () => {
        setFavorites([]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorites, isFavorite, clearFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
