import React, { FC } from 'react';

import { IFilm } from '../../models/IFilm';
import { kinopoiskApi } from '../../services/KinopoiskService';
import { Card } from '../../components/Card/Card';
import { Navbar } from '../../components/Navbar/Navbar';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner/LoadingSpinner';

import styles from './PremieresPage.module.css';

export const PremieresPage: FC = () => {
    const { data, isError, isLoading } =
        kinopoiskApi.useFetchPremieresQuery('');
    const premieres: IFilm[] = data?.items;

    return (
        <div>
            <Navbar />
            <div className={styles.premieresPage__content}>
                {isLoading && <LoadingSpinner/>}
                {isError && <div>Error!</div>}
                {premieres &&
                    premieres.map((film: IFilm) => (
                        <Card key={film.kinopoiskId} film={film} />
                    ))}
            </div>
        </div>
    );
};
