import React from 'react';

import { useFavorites } from '../../hooks/useFavorites';
import { Card } from '../../components/Card/Card';
import { kinopoiskApi } from '../../services/KinopoiskService';
import { Navbar } from '../../components/Navbar/Navbar';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner/LoadingSpinner';
import { IFilm } from '../../models/IFilm';

import styles from './BookmarksPage.module.css';

export const BookmarksPage = () => {
    const { favorites } = useFavorites();

    return (
        <div>
            <Navbar />
            <div className={styles.bookmarkPage}>
                {favorites.length === 0 ? (
                    <h2>Nothing yet...</h2>
                ) : (
                    favorites.map((film) => {
                        // const film: IFilm = JSON.parse(element);

                        if (film) {
                            return <Card key={film.filmId} film={film} />;
                        }

                        return null;
                    })
                )}
            </div>
        </div>
    );
};
