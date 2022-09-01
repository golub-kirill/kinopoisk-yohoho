import { useMemo, useState } from 'react';

import { IFilm } from '../models/IFilm';
import { kinopoiskApi } from '../services/KinopoiskService';

export const useFilms = (page: number) => {
    const [totalPages, setTotalPages] = useState(1);
    const currentPage = (page <= totalPages ? page : totalPages )|| 1;
    

    const { data, isError, isLoading } =
        kinopoiskApi.useFetchByFiltersQuery(currentPage);


    return useMemo(() => {

        setTotalPages(data?.totalPages);

        let loading = true;
        let error = true;
        let films: IFilm[] = [];


        error = isError;
        loading = isLoading;
        if (!error && !loading) {
            films = data.items;
        }

        return { films, loading, error };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, isLoading, isError]);

};