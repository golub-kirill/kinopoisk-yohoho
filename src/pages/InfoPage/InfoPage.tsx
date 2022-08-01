import React, { FC, memo, useMemo } from 'react';
import { BsBookmarkStar } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

import { Player } from '../../components/Player/Player';
import { Button } from '../../components/UI/Button/Button';
import { GenreTile } from '../../components/UI/GenreTile/GenreTile';
import { StaffLine } from '../../components/UI/StaffLine/StaffLine';
import { IPerson } from '../../models/IPerson';
import { kinopoiskApi } from '../../services/KinopoiskService';

import styles from './InfoPage.module.css';

export const InfoPage: FC = memo(() => {
    const params = useParams();
    const {
        data: film,
        isError,
        isLoading,
    } = kinopoiskApi.useFetchFilmByIdQuery(Number(params.filmId));

    const {
        data: staff,
        isError: isStaffError,
        isLoading: isStaffLoading,
    } = kinopoiskApi.useFetchStaffByIdQuery(Number(params.filmId));

    const genresList = useMemo(() => {
        return film?.genres?.map((genre): string => Object.values(genre)[0]);
    }, [film?.genres]);

    const countriesList = useMemo(() => {
        return film?.countries
            ?.map((country): object => Object.values(country))
            .join(' | ');
    }, [film?.countries]);

    const staffList = useMemo(() => {
        const list = {
            directors: [] as IPerson[],
            actors: [] as IPerson[],
            writers: [] as IPerson[],
            operators: [] as IPerson[],
            composers: [] as IPerson[],
            producers: [] as IPerson[],
            editors: [] as IPerson[],
        };
        // eslint-disable-next-line array-callback-return
        staff?.map((person: IPerson) => {
            switch (person.professionKey.toLowerCase()) {
                case 'director':
                    list.directors.push(person);
                    break;
                case 'actor':
                    list.actors.push(person);
                    break;
                case 'writer':
                    list.writers.push(person);
                    break;
                case 'operator':
                    list.operators.push(person);
                    break;
                case 'composer':
                    list.composers.push(person);
                    break;
                case 'producer':
                    list.producers.push(person);
                    break;
                case 'editor':
                    list.editors.push(person);
                    break;
            }
        });
        return list;
    }, [staff]);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error!</div>}
            {film && (
                <div className={styles.infoPage}>
                    <div className={styles.infoPage__content}>
                        <div className={styles.infoPage__content__poster}>
                            <img
                                src={film.posterUrlPreview}
                                alt={film.nameRu}
                            />
                            {/* TODO: доделать и быть крутым */}
                            {/* <TraillersFrame/> */}
                        </div>
                        <div className={styles.infoPage__content__info}>
                            {/* TITLE */}
                            <div
                                className={
                                    styles.infoPage__content__info__title
                                }>
                                <span
                                    className={
                                        styles.infoPage__content__info__title__ru
                                    }>
                                    {`${film.nameRu} (${film.year})`}
                                </span>
                                {film.nameEn ||
                                    (film.nameOriginal && (
                                        <p
                                            className={
                                                styles.infoPage__content__info__title__en
                                            }>
                                            {`${
                                                film.nameEn || film.nameOriginal
                                            }`}
                                        </p>
                                    ))}
                            </div>
                            {/* DESCRIPTION */}

                            <p
                                className={
                                    styles.infoPage__content__info__description
                                }>
                                {film.description}
                            </p>

                            <span
                                className={
                                    styles.infoPage__content__info__buttons
                                }>
                                <Button
                                    onClick={function (): void {
                                        throw new Error(
                                            'Function not implemented.'
                                        );
                                    }}>
                                    Remember <BsBookmarkStar />
                                </Button>
                            </span>

                            {/* ABOUT */}

                            <div
                                className={
                                    styles.infoPage__content__info__about
                                }>
                                <h2>About Film</h2>
                                <p id="year">
                                    <span
                                        className={
                                            styles.infoPage__content__info__about__lable
                                        }>
                                        Year of production:
                                    </span>{' '}
                                    {film.year}
                                </p>
                                <p id="country">
                                    <span
                                        className={
                                            styles.infoPage__content__info__about__lable
                                        }>
                                        Country:
                                    </span>{' '}
                                    {countriesList}
                                </p>
                                <p id="genre">
                                    <span
                                        className={
                                            styles.infoPage__content__info__about__lable
                                        }>
                                        Genre:
                                    </span>{' '}
                                    {genresList?.map(
                                        (genre: string, index: number) => (
                                            <GenreTile
                                                key={index}
                                                genre={genre}
                                            />
                                        )
                                    )}
                                </p>

                                {film.slogan && (
                                    <p id="slogan">
                                        <span
                                            className={
                                                styles.infoPage__content__info__about__lable
                                            }>
                                            Slogan:
                                        </span>{' '}
                                        {`"${film.slogan}"`}
                                    </p>
                                )}

                                {isStaffLoading && <div>Loading...</div>}
                                {isStaffError && <div>Error!</div>}
                                {staffList && (
                                    <span>
                                        <StaffLine
                                            role="Director"
                                            list={staffList.directors}
                                        />

                                        <StaffLine
                                            role="Actor"
                                            list={staffList.actors}
                                        />

                                        <StaffLine
                                            role="Writer"
                                            list={staffList.writers}
                                        />

                                        <StaffLine
                                            role="Operator"
                                            list={staffList.operators}
                                        />

                                        <StaffLine
                                            role="Composer"
                                            list={staffList.composers}
                                        />

                                        <StaffLine
                                            role="Producer"
                                            list={staffList.producers}
                                        />

                                        <StaffLine
                                            role="Editor"
                                            list={staffList.editors}
                                        />
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <Player />
                </div>
            )}
        </div>
    );
});
