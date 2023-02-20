import { useMemo, useState } from 'react';

import { IFilm } from '../models/IFilm';
import { kinopoiskApi } from '../services/KinopoiskService';

export const useFilms = (page: number) => {
    const [totalPages, setTotalPages] = useState(1);
    const currentPage = (page <= totalPages ? page : totalPages) || 1;

    const { data, isError, isLoading } =
        kinopoiskApi.useFetchTopFilmsQuery(currentPage);

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

        return { films, loading, error };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, isLoading, isError]);
};
