import React, { FC, useEffect } from 'react';

import { IFilm } from '../../models/IFilm';
import { kinopoiskApi } from '../../services/KinopoiskService';
import { Card } from '../../components/Card/Card';

import styles from './PremieresPage.module.css';

export const PremieresPage: FC = () => {
    const { data, isError, isLoading } =
        kinopoiskApi.useFetchPremieresQuery('');
    const premieres: IFilm[] = data?.items;

    useEffect((): void => {}, []);

    return (
        <div className={styles.premieresPage__content}>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error!</div>}
            {premieres &&
                premieres.map((film: IFilm) => (
                    <Card key={film.kinopoiskId} film={film} />
                ))}
        </div>
    );
};
