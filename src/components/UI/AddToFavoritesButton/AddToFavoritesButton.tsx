import React, { FC, memo } from 'react';
import { BsBookmarkStar, BsCheck } from 'react-icons/bs';

import { Button } from '../Button/Button';
import { useFavorites } from '../../../hooks/useFavorites';
import { IFilm } from '../../../models/IFilm';

import styles from './AddToFavoritesButton.module.css';

interface Props {
    isFavorite: boolean;
    film: IFilm;
}

export const AddToFavoritesButton: FC<Props> = memo(({isFavorite, film}) => {
    const { toggleFavorite } = useFavorites();
    return (
        <Button
            className={isFavorite ? styles.addToFavoritesButton_active : undefined}
            onClick={() => {
                toggleFavorite(film);
            }}
            icon={isFavorite ? <BsCheck /> : <BsBookmarkStar />}>
            Remember
        </Button>
    );
});
