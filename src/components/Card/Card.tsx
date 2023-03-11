import React, {
    FC,
    memo,
    useCallback,
    useState,
    useRef,
    useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useHover } from 'usehooks-ts';

import { IFilm } from '../../models/IFilm';
import { GenreTile } from '../UI/GenreTile/GenreTile';
import placeholder from '../../assets/placeholder.svg';
import { Ratings } from '../UI/Ratings/Ratings';
import { kinopoiskApi } from '../../services/KinopoiskService';

import styles from './Card.module.css';

interface Props {
    film: IFilm;
}

export const Card: FC<Props> = memo(({ film }) => {
    const navigate = useNavigate();
    const {
        data: info,
        isError,
        isLoading,
    } = kinopoiskApi.useFetchFilmByIdQuery(Number(film?.filmId));

    const genresList = useCallback(() => {
        return film.genres?.map((genre): string => Object.values(genre)[0]);
    }, [film.genres]);

    const countriesList = useCallback(() => {
        return film.countries
            ?.map((country): object => Object.values(country))
            .join(' | ');
    }, [film.countries]);

    // Exclude film by country
    if (film.countries.some((country) => Object.values(country)[0] === ' ')) {
        return null;
    }

    return (
        <div
            className={styles.card}
            onClick={() => navigate(`/${film.filmId || film.kinopoiskId}`)}>
            <img
                className={styles.card__poster}
                src={film.posterUrlPreview || placeholder}
                alt={film.nameEn}
                loading="lazy"
            />
            {/* {(info?.ratingKinopoisk || info?.ratingImdb) && (
                <Ratings
                    ratingKinopoisk={info?.ratingKinopoisk}
                    ratingImdb={info?.ratingImdb}
                />
            )} */}

            <div className={styles.card__content}>
                <div className={styles.card__content__title}>
                    <span className={styles.card__content__title__ru}>
                        {(film.nameEn || film.nameRu) + ' '}
                    </span>
                    {film.nameEn && (
                        <p className={styles.card__content__title__en}>
                            {film.nameRu || ''}
                        </p>
                    )}
                </div>
                <div className={styles.card__content__info}>
                    <span className={styles.card__content__info__length}>
                        {Math.trunc(film.filmLength / 60) > 0 &&
                            Math.trunc(film.filmLength / 60) +
                                'h ' +
                                (film.filmLength % 60) +
                                'm'}
                    </span>

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
