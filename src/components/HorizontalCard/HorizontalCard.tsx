import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { IFilm } from '../../models/IFilm';

import styles from './HorizontalCard.module.css';

interface Props {
    film: IFilm;
}

export const HorizontalCard: FC<Props> = memo((props: Props) => {
    const navigate = useNavigate();

    return (
        <div
            className={styles.horizontalCard}
            onClick={() =>
                navigate(`/${props.film.kinopoiskId || props.film.filmId}`)
            }>
            <img
                className={styles.horizontalCard__poster}
                src={props.film.posterUrlPreview}
                alt={props.film.nameRu}
                loading="lazy"
            />
            <div className={styles.horizontalCard__content}>
                <div className={styles.horizontalCard__content__title}>
                    <span className={styles.horizontalCard__content__title__ru}>
                        {props.film.nameRu + ' '}
                    </span>
                    {props.film.nameEn && (
                        <p
                            className={
                                styles.horizontalCard__content__title__en
                            }>
                            {`(${props.film.nameEn})`}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
});
