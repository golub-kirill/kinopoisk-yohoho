import React, { FC, memo, useEffect } from 'react';

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
    const { data, isLoading, isError } =
        kinopoiskApi.useFetchFilmsBySearchQuery({
            searchQuery: props.searchQuery,
            page: props.page,
        });

    const [films, setFilms] = React.useState<IFilm[]>([]);

    useEffect(() => {
        setFilms(data?.films);
    }, [data, props.searchQuery]);

    return (
        <div className={styles.searchResultWindow__wrapper}>
            {isLoading ? (
                <LoadingSpinner />
            ) : films?.length ? (
                <div className={styles.searchResultWinow__list}>
                    {films?.map((film: IFilm) => (
                        <SearchItem film={film} key={film.filmId} />
                    ))}
                    {data?.totalPages > 1 && (
                        <button
                            className={styles.searchResultWinow__nextButton}
                            onClick={() => props.setPage(props.page + 1)}>
                            Next Page
                        </button>
                    )}
                </div>
            ) : (
                <LoadingSpinner />
            )}
            {isError && <div>Error</div>}
        </div>
    );
});
