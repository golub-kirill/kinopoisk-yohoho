import { useCallback } from 'react';
import useLocalStorage from 'usehooks-ts/dist/esm/useLocalStorage/useLocalStorage';

import { IFilm } from '../models/IFilm';

export const useFavorites = () => {
    const [favorites, setFavorites] = useLocalStorage<IFilm[]>('favorite_films', []);

    const toggleFavorite = useCallback((film: IFilm) => {
        if (!film.kinopoiskId) return;
        const index = favorites.findIndex((favorite: IFilm) => favorite.kinopoiskId === film.kinopoiskId);
        if (index > -1) {
            const newFavorites = [...favorites];
            newFavorites.splice(index, 1);
            setFavorites(newFavorites);
        } else {
            setFavorites([...favorites, film]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favorites]
    );

    return {
        favorites,
        toggleFavorite,
    };
};
