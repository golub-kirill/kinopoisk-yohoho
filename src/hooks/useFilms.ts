import { useMemo, useState } from 'react';

import { IFilm } from '../models/IFilm';
import { kinopoiskApi } from '../services/KinopoiskService';

export const useFilms = () => {
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    
    const { data, isError, isLoading } = kinopoiskApi.useFetchTopFilmsQuery(currentPage);

    const loadMore = () => {
        setCurrentPage(currentPage <= totalPages ? currentPage + 1 : totalPages);
    };

    return useMemo(() => {
        setTotalPages(data?.pagesCount || 1);
        let loading = true;
        let error = true;
        let films: IFilm[] = [];

        error = isError;
        loading = isLoading;
        if (!error && !loading) {
            films = data.films;
        }

        return { films, loading, error, currentPage, totalPages, loadMore };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, isLoading, isError]);
};
