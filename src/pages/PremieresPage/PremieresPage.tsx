import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';

import { useFilms } from '../../hooks/useFilms';
import useOnScreen from '../../hooks/useOnScreen';
import { IFilm } from '../../models/IFilm';
import { Card } from '../../components/Card/Card';
import { Navbar } from '../../components/Navbar/Navbar';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner/LoadingSpinner';

import styles from './PremieresPage.module.css';

export const PremieresPage: FC = memo(() => {
    const lastItem = useRef<any>(null);
    const { films, loading, error, currentPage, loadMore } =
        useFilms();
    const [filmsList, setFilmsList] = useState<IFilm[]>([]);
    const isBottomOfPageVisible = useOnScreen(lastItem);

    // TODO: Переделай этот трешняк
    useMemo(() => {
        (!loading && !error && isBottomOfPageVisible === true) && loadMore();
        return () => {
            lastItem.current = null;
        };
    }, [isBottomOfPageVisible]);

    useEffect(() => {
        if (!loading) {
            // console.log('currentPage', currentPage);

            currentPage === 1
                ? setFilmsList(films)
                : setFilmsList([filmsList[10], ...films]);
        }
    }, [currentPage]);

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
            <span ref={lastItem} />
        </div>
    );
});
