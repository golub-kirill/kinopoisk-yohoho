import React, { FC, memo } from 'react';

import { IFilm } from '../../../models/IFilm';
import { kinopoiskApi } from '../../../services/KinopoiskService';
import { HorizontalCard } from '../../HorizontalCard/HorizontalCard';

import styles from './SequelsAndPrequels.module.css';

interface Props {
    filmId: number;
}

export const SequelsAndPrequels: FC<Props> = memo(({ filmId }) => {
    const { data, isLoading } =
        kinopoiskApi.useFetchSequelPrequelByIdQuery(filmId);

    const films: IFilm[] = data;

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {films?.length > 0 && (
                <div className={styles.sequelsAndPrequels__wrapper}>
                    <p className={styles.sequelsAndPrequels__title}>
                        Sequels and Prequels
                    </p>
                    <div className={styles.sequelsAndPrequels}>
                        {films.map((film: IFilm) => (
                            <HorizontalCard key={film.filmId} film={film} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
});
