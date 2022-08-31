import React, { FC, memo } from 'react';

import { IFilm } from '../../../models/IFilm';
import { kinopoiskApi } from '../../../services/KinopoiskService';
import { HorizontalCard } from '../../HorizontalCard/HorizontalCard';
import { LoadingSpinner } from '../../UI/LoadingSpinner/LoadingSpinner';

import styles from './SimilarFilms.module.css';

interface Props {
    filmId: number;
}

export const SimilarFilms: FC<Props> = memo((props: Props) => {
    const { data, isLoading } = kinopoiskApi.useFetchSimilarFilmsByIdQuery(
        props.filmId
    );

    const films: IFilm[] = data?.items;

    return (
        <div>
            {isLoading && <LoadingSpinner />}
            {films?.length ? (
                <div className={styles.similarFilms__wrapper}>
                    <div className={styles.similarFilms__title}>
                        Similar Films
                    </div>
                    <div className={styles.similarFilms}>
                        {films.map((film: IFilm) => (
                            <HorizontalCard key={film.filmId} film={film} />
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
});
