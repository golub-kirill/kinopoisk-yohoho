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
        <>
            {isLoading && <LoadingSpinner />}
            {films?.length > 0 && (
                <div className={styles.similarFilms__wrapper}>
                    <p className={styles.similarFilms__title}>Similar Films</p>
                    <div className={styles.similarFilms}>
                        {films.map((film: IFilm) => (
                            <HorizontalCard key={film.filmId} film={film} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
});
