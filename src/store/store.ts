import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { kinopoiskApi } from '../services/KinopoiskService';




const rootReducer = combineReducers({
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(kinopoiskApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
