import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';

import { useFilms } from '../../hooks/useFilms';
import useOnScreen from '../../hooks/useOnScreen';
import { IFilm } from '../../models/IFilm';
import { Card } from '../../components/Card/Card';
import { Navbar } from '../../components/Navbar/Navbar';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner/LoadingSpinner';

import styles from './PremieresPage.module.css';

export const PremieresPage: FC = memo(() => {
    const lastItem = useRef<HTMLSpanElement>(null);
    const { films, loading, error, currentPage, loadMore } = useFilms();
    const [filmsList, setFilmsList] = useState<IFilm[]>([]);
    const isBottomOfPageVisible = useOnScreen(lastItem);

    useEffect(() => {
        if (!loading && films.length > 0) {
            const updatedFilmsList =
                currentPage === 1 ? films : [...filmsList, ...films];

            setFilmsList(updatedFilmsList);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, loading]);

    useMemo(() => {
        !loading && !error && isBottomOfPageVisible === true && loadMore();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, error, isBottomOfPageVisible]);

    return (
        <div>
            <Navbar />
            <div className={styles.premieresPage__content}>
                {loading && <LoadingSpinner />}
                {error && <p>Error: {error}</p>}
                {filmsList?.length > 0 &&
                    filmsList.map((film: IFilm, index: number) => {
                        return <Card key={index} film={film} />;
                    })}
            </div>
            <span
                ref={lastItem}
                style={{ border: '1px solid red', height: '5rem' }}
            />
        </div>
    );
});
