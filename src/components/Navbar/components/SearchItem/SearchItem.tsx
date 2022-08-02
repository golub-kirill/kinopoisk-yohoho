import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { IFilm } from '../../../../models/IFilm';

import styles from './SearchItem.module.css';

interface Props {
    film: IFilm;
}

export const SearchItem: FC<Props> = (props: Props) => {
    return (
        <NavLink
            to={'/' + props.film.filmId}
            className={styles.searchItem__wrapper}>
            <img
                className={styles.searchItem__image}
                src={props.film.posterUrlPreview}
                alt={props.film.nameEn}
                loading="lazy"
            />
            <div className={styles.searchItem__info}>
                <div className={styles.searchItem__name}>
                    {props.film.nameRu ||
                        props.film.nameEn ||
                        props.film.nameOriginal}
                </div>
                <div className={styles.searchItem__year}>
                    {props.film.year}
                    {props.film.type === 'TV_SERIES' ? (
                        <span>, TV series</span>
                    ) : (
                        <span>, {props.film.filmLength}</span>
                    )}
                </div>
            </div>
            <div className={styles.searchItem__rating}>
                {props.film.rating > 0 ? props.film.rating : '\u00A0'}
            </div>
        </NavLink>
    );
};
