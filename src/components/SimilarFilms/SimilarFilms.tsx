import React, { FC } from 'react';

import { IFilm } from '../../models/IFilm';
import { kinopoiskApi } from '../../services/KinopoiskService';
import { Card } from '../Card/Card';

import styles from './SimilarFilms.module.css';

interface Props {
    filmId: number;
}

export const SimilarFilms: FC<Props> = (props: Props) => {
    const { data, isError, isLoading } =
        kinopoiskApi.useFetchSimilarFilmsByIdQuery(Number(props.filmId));

    const films: IFilm[] = data?.items;

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error!</div>}
            {films?.length ? (
                <div className={styles.similarFilms__wrapper}>
                    <div className={styles.similarFilms__title}>
                        Similar Films
                    </div>
                    <div className={styles.similarFilms}>
                        {films.map((film: IFilm) => (
                            <Card
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                                key={film.filmId}
                                film={film}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
