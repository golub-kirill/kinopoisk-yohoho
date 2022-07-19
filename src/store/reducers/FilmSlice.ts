import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFilm } from '../../models/IFilm';

interface FilmState {
    films: IFilm[];
    isLoading: boolean;
    error: string;
}

const initialState: FilmState = {
    films: [],
    isLoading: false,
    error: '',
};

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        fetchFilmsStart(state: { isLoading: boolean; }) {
            state.isLoading = true;
        },

        fetchFilmsSuccess(state:
            { films: IFilm[]; isLoading: boolean; error: string; }, action: PayloadAction<IFilm[]>) {
            state.films = action.payload;
            state.isLoading = false;
            state.error = '';
        },

        fetchFilmsError(state: { error: string; isLoading: boolean; }, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
    },

});

export default filmSlice.reducer;
