import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';

import { useFilms } from '../../hooks/useFilms';
import useOnScreen from '../../hooks/useOnScreen';
import { IFilm } from '../../models/IFilm';
import { Card } from '../../components/Card/Card';
import { Navbar } from '../../components/Navbar/Navbar';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner/LoadingSpinner';

import styles from './PremieresPage.module.css';

export const PremieresPage: FC = memo(() => {
    const [page, setPage] = useState<number>(1);
    const lastItem = useRef<any>(null);
    const { films, loading, error } = useFilms(page);
    const [filmsList, setFilmsList] = useState<IFilm[]>([]);
    const isBottomOfPageVisible = useOnScreen(lastItem);

    console.log(process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_TOKEN);

    useMemo(() => {
        !loading &&
            !error &&
            page < 20 &&
            filmsList.length > 10 &&
            setPage(page + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isBottomOfPageVisible]);

    useEffect(() => {
        page === 1
            ? setFilmsList(films)
            : setFilmsList([...filmsList, ...films]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, loading, films]);

    return (
        <div>
            <Navbar />
            <div className={styles.premieresPage__content}>
                {loading && <LoadingSpinner />}
                {error && <div>Error!</div>}
                {filmsList.length > 0 &&
                    filmsList.map((film: IFilm, index: number) => {
                        return <Card key={film.kinopoiskId} film={film} />;
                    })}
            </div>
            <span ref={lastItem} />
            <button onClick={() => setPage(page + 1)}>MORE</button>
        </div>
    );
});
