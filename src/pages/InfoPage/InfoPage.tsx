import React, { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { About } from '../../components/InfoPageComponents/About';
import { Description } from '../../components/InfoPageComponents/Description';
import { Staff } from '../../components/InfoPageComponents/Staff';
import { Title } from '../../components/InfoPageComponents/Title';
import { Navbar } from '../../components/Navbar/Navbar';
import { Player } from '../../components/Player/Player';
import { Ratings } from '../../components/UI/Ratings/Ratings';
import { SimilarFilms } from '../../components/InfoPageComponents/SimilarFilms/SimilarFilms';
import { SequelsAndPrequels } from '../../components/InfoPageComponents/SequelsAndPrequels/SequelsAndPrequels';
import { AddToFavoritesButton } from '../../components/UI/AddToFavoritesButton/AddToFavoritesButton';
import { kinopoiskApi } from '../../services/KinopoiskService';
import { useFavorites } from '../../hooks/useFavorites';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner/LoadingSpinner';
import { IFilm } from '../../models/IFilm';

import styles from './InfoPage.module.css';

export const InfoPage: FC = memo(() => {
    const params = useParams();
    const {
        data: film,
        isError,
        isLoading,
    } = kinopoiskApi.useFetchFilmByIdQuery(Number(params.filmId));

    const { favorites } = useFavorites();
    const isFavorite =
        favorites.findIndex(
            (favorite: IFilm) => favorite.kinopoiskId === film?.kinopoiskId
        ) > -1;
    const mooveToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <Navbar />
            {isLoading && <LoadingSpinner />}
            {isError && <div>Error!</div>}
            {film && (
                <div className={styles.infoPage}>
                     <div className={styles.infoPage__content__poster}>
                            <Ratings
                                ratingKinopoisk={film.ratingKinopoisk}
                                ratingImdb={film.ratingImdb}
                            />
                            <img
                                src={film.posterUrlPreview}
                                alt={film.nameRu}
                                loading="lazy"
                            />
                        </div>
                    <div className={styles.infoPage__content}>
                        <div className={styles.infoPage__content__info}>
                            {/* TITLE */}
                            <Title
                                nameRu={film.nameRu}
                                nameEn={film.nameEn}
                                nameOriginal={film.nameOriginal}
                                year={film.year}
                                ratingAgeLimits={film.ratingAgeLimits}
                                ratingMpaa={film.ratingMpaa}
                            />
                            {/* DESCRIPTION */}

                            <Description description={film.description} />

                            <AddToFavoritesButton
                                isFavorite={isFavorite}
                                film={film}
                            />

                            {/* ABOUT */}

                            <About
                                genres={film.genres}
                                countries={film.countries}
                                year={film.year}
                                slogan={film.slogan}
                            />
                            <Staff filmId={Number(params.filmId)} />
                        </div>
                    </div>
                    <Player filmId={params.filmId} imdbId={film.imdbId} />
                    <div onClick={mooveToTop}>
                        <SequelsAndPrequels filmId={Number(params.filmId)} />
                        <SimilarFilms filmId={Number(params.filmId)} />
                    </div>
                </div>
            )}
        </div>
    );
});
