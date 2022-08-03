import React from 'react';

import { useFavorites } from '../../hooks/useFavorites';
import { Card } from '../../components/Card/Card';
import { kinopoiskApi } from '../../services/KinopoiskService';
import { Navbar } from '../../components/Navbar/Navbar';

import styles from './BookmarksPage.module.css';

export const BookmarksPage = () => {
    const { favorites } = useFavorites();


    return (
        <div>
            <Navbar/>
            <div className={styles.bookmarkPage}>
            {favorites.map((filmId) => {
                const {
                    data: film,
                    isError,
                    isLoading,
                } = kinopoiskApi.useFetchFilmByIdQuery(filmId);
                if (isLoading) {
                    return <div>Loading...</div>;
                }
                if (isError) {
                    return <div>Error!</div>;
                }
                if (film) {
                    return <Card key={film?.kinopoiskId} film={film} />;
                }
                return null;
            })}
            </div>
        </div>
    );
};
