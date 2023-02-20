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

export const SearchResultWindow: FC<Props> = memo(
    ({ searchQuery, page, setPage }) => {
        const { data, isLoading } = kinopoiskApi.useFetchFilmsBySearchQuery({
            searchQuery: searchQuery,
            page: page,
        });

        const [visible, setVisible] = useState<Boolean>(false);

        useEffect(() => {
            if (!visible && searchQuery.length > 0) {
                setVisible(true);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [searchQuery]);

        if (!visible) return null;

        return (
            <div
                className={styles.searchResultWindow__wrapper}
                id="search-window"
                onClick={() => {
                    setVisible(false);
                }}>
                <div className={styles.searchResultWinow__list}>
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : data?.films.length > 0 && !isLoading ? (
                        <div className={styles.searchResultWinow__results}>
                            {data?.films.map((film: IFilm) => (
                                <SearchItem film={film} key={film.filmId} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.searchResultWinow__noResults}>
                            No results found.
                        </div>
                    )}
                </div>
            </div>
        );
    }
);
