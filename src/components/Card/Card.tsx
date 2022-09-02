import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { IFilm } from '../../models/IFilm';
import { GenreTile } from '../UI/GenreTile/GenreTile';

import styles from './Card.module.css';

interface Props {
    film: IFilm;
}

export const Card: FC<Props> = memo((props: Props) => {
    const navigate = useNavigate();

    const genresList = useCallback(() => {
        return props.film.genres?.map(
            (genre): string => Object.values(genre)[0]
        );
    }, [props.film.genres]);

    const countriesList = useCallback(() => {
        return props.film.countries
            ?.map((country): object => Object.values(country))
            .join(' | ');
    }, [props.film.countries]);

    return (
        <div
            className={styles.card}
            onClick={() =>
                navigate(`/${props.film.kinopoiskId || props.film.filmId}`)
            }>
            <img
                className={styles.card__poster}
                src={props.film.posterUrlPreview}
                alt={props.film.nameRu}
                loading="lazy"
            />
            <div className={styles.card__content}>
                <div className={styles.card__content__title}>
                    <span className={styles.card__content__title__ru}>
                        {props.film.nameRu + ' '}
                    </span>
                    {props.film.nameEn && (
                        <p className={styles.card__content__title__en}>
                            {`(${props.film.nameEn})`}
                        </p>
                    )}
                </div>
                <div className={styles.card__content__info}>
                    <span className={styles.card__content__info__year}>
                        {props.film.year}
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
