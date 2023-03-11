import React, { FC, memo } from 'react';
import classNames from 'classnames';

import styles from './Ratings.module.css';

interface Props {
    ratingKinopoisk: number;
    ratingImdb: number;
    className?: string;
}

export const Ratings: FC<Props> = memo(
    ({ ratingKinopoisk, ratingImdb, className }) => {
        if (ratingKinopoisk && ratingImdb === 0) return null;
        
        // Define color constants
        const GREEN = '#008000';
        const YELLOW = '#997a00';
        const ORANGE = '#e05601';

        // Calculate background colors for each rating
        const backgroundColorKp =
            ratingKinopoisk >= 7
                ? GREEN
                : ratingKinopoisk >= 5
                ? YELLOW
                : ORANGE;
        const backgroundColorImdb =
            ratingImdb >= 7 ? GREEN : ratingImdb >= 5 ? YELLOW : ORANGE;

        // Render the ratings with the calculated background colors
        return (
            <div className={classNames(styles.ratings__wrapper, className)}>
                {/* Render Kinopoisk rating if it exists */}
                {ratingKinopoisk && (
                    <div
                        style={{ backgroundColor: backgroundColorKp }}
                        className={styles.ratings__wrapper__kp}>
                        KP {ratingKinopoisk}
                    </div>
                )}
                {/* Render IMDB rating if it exists */}
                {ratingImdb && (
                    <div
                        style={{ backgroundColor: backgroundColorImdb }}
                        className={styles.ratings__wrapper__imdb}>
                        IM {ratingImdb}
                    </div>
                )}
            </div>
        );
    }
);
