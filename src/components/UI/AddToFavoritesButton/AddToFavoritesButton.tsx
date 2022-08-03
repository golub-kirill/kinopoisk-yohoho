import React, { FC, memo } from 'react';
import { BsBookmarkStar, BsCheck } from 'react-icons/bs';

import { Button } from '../Button/Button';
import { useFavorites } from '../../../hooks/useFavorites';

import styles from './AddToFavoritesButton.module.css';

interface Props {
    isFavorite: boolean;
    filmId: number;
}

export const AddToFavoritesButton: FC<Props> = memo((props: Props) => {
    const { toggleFavorite } = useFavorites();
    return (
        <Button
            className={props.isFavorite ? styles.addToFavoritesButton_active : undefined}
            onClick={() => {
                toggleFavorite(props.filmId);
            }}
            icon={props.isFavorite ? <BsCheck /> : <BsBookmarkStar />}>
            Remember
        </Button>
    );
});
