import React, { FC, memo } from 'react';
import { BsBookmarkStar } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

import { About } from '../../components/InfoPageComponents/About';
import { Description } from '../../components/InfoPageComponents/Description';
import { Staff } from '../../components/InfoPageComponents/Staff';
import { Title } from '../../components/InfoPageComponents/Title';
import { Navbar } from '../../components/Navbar/Navbar';
import { Player } from '../../components/Player/Player';
import { Ratings } from '../../components/UI/Ratings/Ratings';
import { SimilarFilms } from '../../components/SimilarFilms/SimilarFilms';
import { Button } from '../../components/UI/Button/Button';
import { kinopoiskApi } from '../../services/KinopoiskService';

import styles from './InfoPage.module.css';

export const InfoPage: FC = memo(() => {
    const params = useParams();
    const {
        data: film,
        isError,
        isLoading,
    } = kinopoiskApi.useFetchFilmByIdQuery(Number(params.filmId));

    return (
        <div>
            <Navbar />
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error!</div>}
            {film && (
                <div className={styles.infoPage}>
                    <div className={styles.infoPage__content}>
                        <div className={styles.infoPage__content__poster}>
                            <img
                                src={film.posterUrlPreview}
                                alt={film.nameRu}
                                loading="lazy"
                            />
                            <Ratings
                                ratingKinopoisk={film.ratingKinopoisk}
                                ratingImdb={film.ratingImdb}
                                reviewsCount={film.reviewsCount}
                                ratingGoodReview={film.ratingGoodReview}
                            />
                        </div>
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

                            <Button
                                onClick={function (): void {
                                    throw new Error(
                                        'Function not implemented.'
                                    );
                                }}>
                                Remember <BsBookmarkStar />
                            </Button>

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
                    <Player filmId={Number(params.filmId)} />
                    <SimilarFilms filmId={Number(params.filmId)} />
                </div>
            )}
        </div>
    );
});
