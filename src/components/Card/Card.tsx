import React, { FC, memo } from 'react';
import { BsFillPlayFill, BsBookmarkStar } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { IFilm } from '../../models/IFilm';
import { Button } from '../UI/Button/Button';
import { GenreTile } from '../UI/GenreTile/GenreTile';

import styles from './Card.module.css';

interface Props {
    film: IFilm;
    onClick?: () => void;
}

export const Card: FC<Props> = memo((props: Props) => {
    const navigate = useNavigate();

    const genresList = props.film.genres?.map(
        (genre): string => Object.values(genre)[0]
    );

    const countriesList = props.film.countries
        ?.map((country): object => Object.values(country))
        .join(' | ');

    return (
        <div className={styles.card} onClick={props.onClick}>
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
                        {countriesList}
                    </span>

                    <span className={styles.card__content__info__duration}>
                        {props.film.duration}
                    </span>

                    <span className={styles.card__content__info__genre}>
                        {genresList?.map((genre: string, index: number) => (
                            <GenreTile key={index} genre={genre} />
                        ))}
                    </span>
                </div>

                <span className={styles.card__content__buttons}>
                    <Button onClick={() => navigate(`/${props.film.kinopoiskId || props.film.filmId}`)}>
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
