import React, { FC, memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IFilm } from '../../models/IFilm';
import { GenreTile } from '../UI/GenreTile/GenreTile';
import placeholder from '../../assets/placeholder.svg';

import styles from './Card.module.css';

interface Props {
    film: IFilm;
}

export const Card: FC<Props> = memo(({ film }) => {
    const navigate = useNavigate();

    const genresList = useCallback(() => {
        return film.genres?.map((genre): string => Object.values(genre)[0]);
    }, [film.genres]);

    const countriesList = useCallback(() => {
        return film.countries
            ?.map((country): object => Object.values(country))
            .join(' | ');
    }, [film.countries]);

    if (film.countries.some((country) => Object.values(country)[0] === ' ')) {
        return null;
    }

    return (
        <div
            className={styles.card}
            onClick={() => navigate(`/${film.kinopoiskId || film.filmId}`)}>
            <img
                className={styles.card__poster}
                src={film.posterUrlPreview || placeholder}
                alt={film.nameEn}
                loading="lazy"
            />

            <div className={styles.card__content}>
                <div className={styles.card__content__title}>
                    <span className={styles.card__content__title__ru}>
                        {(film.nameEn || film.nameRu) + ' ' }
                    </span>
                    {film.nameEn && (
                        <p className={styles.card__content__title__en}>
                            {film.nameRu || ''}
                        </p>
                    )}
                </div>
                <div className={styles.card__content__info}>
                    <span className={styles.card__content__info__year}>
                        {film.year}
                    </span>
                    <span className={styles.card__content__info__country}>
                        {countriesList()}
                    </span>

                    <span className={styles.card__content__info__genre}>
                        {genresList()?.map((genre: string, index: number) => (
                            <GenreTile key={index} genre={genre} />
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
});
