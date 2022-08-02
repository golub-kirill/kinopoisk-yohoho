import React, { FC, memo, useMemo } from 'react';

import styles from '../../pages/InfoPage/InfoPage.module.css';
import { GenreTile } from '../UI/GenreTile/GenreTile';

type Props = {
    genres: object[] | undefined;
    countries: object[] | undefined;
    year: number | undefined;
    slogan: string | undefined;
};

export const About: FC<Props> = memo((props: Props) => {
    const genresList = useMemo(() => {
        return props.genres?.map((genre): string => Object.values(genre)[0]);
    }, [props.genres]);

    const countriesList = useMemo(() => {
        return props.countries
            ?.map((country): object => Object.values(country))
            .join(' | ');
    }, [props.countries]);

    return (
        <div>
            <h2>About Film</h2>
            <p id="year">
                <span className={styles.infoPage__content__info__about__lable}>
                    Year of production:
                </span>{' '}
                {props.year}
            </p>
            <p id="country">
                <span className={styles.infoPage__content__info__about__lable}>
                    Country:
                </span>{' '}
                {countriesList}
            </p>
            <p id="genre">
                <span className={styles.infoPage__content__info__about__lable}>
                    Genre:
                </span>{' '}
                {genresList?.map((genre: string, index: number) => (
                    <GenreTile key={index} genre={genre} />
                ))}
            </p>

            {props.slogan && (
                <p id="slogan">
                    <span
                        className={
                            styles.infoPage__content__info__about__lable
                        }>
                        Slogan:
                    </span>{' '}
                    {`"${props.slogan}"`}
                </p>
            )}
        </div>
    );
});
