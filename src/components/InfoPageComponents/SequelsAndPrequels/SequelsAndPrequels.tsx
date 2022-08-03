import React, { FC, memo } from 'react';

import { IFilm } from '../../../models/IFilm';
import { kinopoiskApi } from '../../../services/KinopoiskService';
import { Card } from '../../Card/Card';

import styles from './SequelsAndPrequels.module.css';

interface Props {
    filmId: number;
}

export const SequelsAndPrequels:FC<Props> = memo(({filmId}) => {
    const { data, isError, isLoading } =
        kinopoiskApi.useFetchSequelPrequelByIdQuery(filmId);

    const films: IFilm[] = data;

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error!</div>}
            {films?.length ? (
                <div className={styles.sequelsAndPrequels__wrapper}>
                    <div className={styles.sequelsAndPrequels__title}>
                        Sequels and Prequels
                    </div>
                    <div className={styles.sequelsAndPrequels}>
                        {films.map((film: IFilm) => (
                            <Card key={film.filmId} film={film} />
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
});
