import React, { useContext } from 'react';
import { FavoritesContext } from '../../../Components/FavoritesPageComponents/FavoritesContext/FavoritesContext'; 
import { MainContainer, ProductCard } from '../../../Components'; 
import { FaTrashAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FaPlus } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const { favorites, clearFavorites } = useContext(FavoritesContext);
    const { t } = useTranslation();

    const handleDeleteAll = () => {
        if (favorites.length === 0) {
            alert(t("favoritesPage.noProductsToDelete"));
        } else {
            // Ask the user for confirmation
            const isConfirmed = window.confirm(t("favoritesPage.confirmDeleteAll"));
            if (isConfirmed) {
                clearFavorites();
            }
        }
    };

    return (
        <div className="favoritesPage">
            <MainContainer>
                <div className="favHead">
                    <h3>
                        {t("favoritesPage.favoritesTitle")}
                    </h3>
                    {favorites.length > 1 && (
                        <button className='deleteAll' onClick={handleDeleteAll}>
                            <FaTrashAlt />
                            <span>
                                {t("favoritesPage.deleteBtn")}
                            </span>
                        </button>
                    )}
                </div>
                <div className="favorites-list">
                    {favorites.length === 0 ? (
                        <>
                            <NavLink to={"/"} className="noDataCard addSome">    
                                <FaPlus />
                            </NavLink>
                            <div className="noDataCard">    
                                <div>
                                    {t("favoritesPage.noDataYet")}
                                </div>
                            </div>
                            <div className="noDataCard">    
                                <div>
                                    {t("favoritesPage.noDataYet")}
                                </div>
                            </div>
                            <div className="noDataCard">    
                                <div>
                                    {t("favoritesPage.noDataYet")}
                                </div>
                            </div>
                
                        </>
                    ) : (
                        favorites.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
            </MainContainer>
        </div>
    );
};

export default FavoritesPage;
