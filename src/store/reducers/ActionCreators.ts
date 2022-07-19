import axios from 'axios';

import { IFilm } from '../../models/IFilm';
import { AppDispatch } from '../store';

import { filmSlice } from './FilmSlice';

export const fetchPremieres = () => async (dispatch: AppDispatch) => {
    const API_KEY = process.env.KINOPOISK_API_UNOFFICIAL_TOKEN || '';
    const link: string =
        'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month='
        + (new Date().getMonth() + 1);
    try {
        dispatch(filmSlice.actions.fetchFilmsStart());
        const response = await axios.get<IFilm[]>(link, {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': API_KEY,
                
            },
        });
        dispatch(filmSlice.actions.fetchFilmsSuccess(response.data));
    } catch (error: any) {
        dispatch(filmSlice.actions.fetchFilmsError(error.message));
    }
};