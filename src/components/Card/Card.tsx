import React, { FC, memo } from 'react';
import { BsFillPlayFill, BsBookmarkStar } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { IFilm } from '../../models/IFilm';
import { Button } from '../UI/Button/Button';
import { GenreTile } from '../UI/GenreTile/GenreTile';

import styles from './Card.module.css';

interface CardProps {
    film: IFilm;
    onClick?: () => void;
}

export const Card: FC<CardProps> = memo(({ film, onClick }) => {
    const navigate = useNavigate();

    const genresList = film.genres?.map(
        (genre): string => Object.values(genre)[0]
    );

    const countriesList = film.countries
        ?.map((country): object => Object.values(country))
        .join(' | ');

    return (
        <div className={styles.card} onClick={onClick}>
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
                        {countriesList}
                    </span>

                    <span className={styles.card__content__info__duration}>
                        {film.duration}
                    </span>

                    <span className={styles.card__content__info__genre}>
                        {genresList?.map((genre: string, index: number) => (
                            <GenreTile key={index} genre={genre} />
                        ))}
                    </span>
                </div>

                <span className={styles.card__content__buttons}>
                    <Button onClick={() => navigate(`/${film.kinopoiskId || film.filmId}`)}>
                        Play <BsFillPlayFill />
                    </Button>
                </span>
            </div>
            <div className={styles.card__bookmark}>
                <BsBookmarkStar />
            </div>
        </div>
    );
});
