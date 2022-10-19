import React, { FC, memo, useEffect, useState } from 'react';

import { IFilm } from '../../../../models/IFilm';
import { kinopoiskApi } from '../../../../services/KinopoiskService';
import { LoadingSpinner } from '../../../UI/LoadingSpinner/LoadingSpinner';
import { SearchItem } from '../SearchItem/SearchItem';

import styles from './SearchResultWindow.module.css';

interface Props {
    searchQuery: string;
    page: number;
    setPage: (page: number) => void;
}

export const SearchResultWindow: FC<Props> = memo((props: Props) => {
    const { data, isLoading } = kinopoiskApi.useFetchFilmsBySearchQuery({
        searchQuery: props.searchQuery,
        page: props.page,
    });

    const [visible, setVisible] = useState<Boolean>(false);

    useEffect(() => {
        if (!visible && props.searchQuery.length > 0) {
            setVisible(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.searchQuery]);

    if (!visible) return null;

    return (
        <div className={styles.searchResultWindow__wrapper} id="search-window">
            <div
                className={styles.searchResultWinow__list}
                onClick={() => {
                    setVisible(false);
                }}>
                {isLoading || data?.films.length === 0 ? (
                    <LoadingSpinner />
                ) : (
                    data?.films.map((film: IFilm) => (
                        <SearchItem film={film} key={film.filmId} />
                    ))
                )}
                {data?.totalPages > 1 && (
                    <button
                        className={styles.searchResultWinow__nextButton}
                        onClick={() => props.setPage(props.page + 1)}>
                        Next Page
                    </button>
                )}
            </div>
        </div>
    );
});
