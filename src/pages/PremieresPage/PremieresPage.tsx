import React, { FC, useRef, useState, useEffect } from 'react';

import { IFilm } from '../../models/IFilm';
import { kinopoiskApi } from '../../services/KinopoiskService';
import { Card } from '../../components/Card/Card';
import { Navbar } from '../../components/Navbar/Navbar';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner/LoadingSpinner';

import styles from './PremieresPage.module.css';

export const PremieresPage: FC = () => {
    const [page, setPage] = useState(1);
    const { data, isError, isLoading } =
        kinopoiskApi.useFetchByFiltersQuery(page);
    const [films, setFilms] = useState<IFilm[]>(data.items);
    const lastItem = useRef<any>(null);

    // let el = lastItem?.current;

    useEffect(() => {
        if (page > 1) {
            setFilms([...films, ...data?.items]);
        } else {
            setFilms(data?.items);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div>
            <Navbar />
            <div className={styles.premieresPage__content}>
                {isLoading && <LoadingSpinner />}
                {isError && <div>Error!</div>}
                {films?.length > 0 &&
                    films.map((film: IFilm, index: number) => {
                        return <Card key={film.kinopoiskId} film={film} />;
                    })}
                <span ref={lastItem} />
            </div>
            <button onClick={() => setPage(page + 1)}>MORE</button>
        </div>
    );
};
