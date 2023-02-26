import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { IFilm } from '../../models/IFilm';
import { GenreTile } from '../UI/GenreTile/GenreTile';

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

    return film.countries.some(
        (country) => Object.values(country)[0] === ' ' // Set any country to skip this country films
    ) ? null : (
        <div
            className={styles.card}
            onClick={() => navigate(`/${film.kinopoiskId || film.filmId}`)}>
            <img
                className={styles.card__poster}
                src={film.posterUrlPreview}
                alt={film.nameRu}
                loading="lazy"
            />
            <div className={styles.card__content}>
                <div className={styles.card__content__title}>
                    <span className={styles.card__content__title__ru}>
                        {film.nameRu + ' '}
                    </span>
                    {film.nameEn && (
                        <p className={styles.card__content__title__en}>
                            {`(${film.nameEn})`}
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
