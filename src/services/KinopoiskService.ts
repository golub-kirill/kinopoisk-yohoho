import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IFilm } from '../models/IFilm';

export const kinopoiskApi = createApi({
    reducerPath: 'kinopoiskAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://kinopoiskapiunofficial.tech/api' }),
    endpoints: (build) => ({
        // Fetch premieres
        fetchPremieres: build.query({
            query: () => ({
                url: '/v2.2/films/premieres',
                params: {
                    year: new Date().getFullYear(),
                    month: new Date().toLocaleString('en-us', { month: 'long' }),
                },
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_TOKEN || '',
                    'Content-Type': 'application/json',
                },

            }),

        }),

        // Fetch info about film by id
        fetchFilmById: build.query<IFilm, number>({
            query: (filmId: number) => ({
                url: `/v2.2/films/${filmId}`,
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_TOKEN || '',
                    'Content-Type': 'application/json',
                },

            }),

        }),

        // Fetch info about film staff by id
        fetchStaffById: build.query({
            query: (filmId: number) => ({
                url: '/v1/staff',
                params: {
                    filmId: filmId,
                },
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_TOKEN || '',
                    'Content-Type': 'application/json',
                },
            }),
        }),

        // Fetch similar films by id
        fetchSimilarFilmsById: build.query({
            query: (filmId: number) => ({
                url: `/v2.2/films/${filmId}/similars`,
                params: {
                    filmId: filmId,
                },
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_TOKEN || '',
                    'Content-Type': 'application/json',
                },
            }),
        }),

    }),

});