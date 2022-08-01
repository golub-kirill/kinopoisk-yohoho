import React, { FC } from 'react';

import styles from './Ratings.module.css';

interface RatingsProps {
    ratingKinopoisk: number | undefined;
    ratingImdb: number | undefined;
    reviewsCount: number;
    ratingGoodReview: number;
}

export const Ratings: FC<RatingsProps> = ({
    ratingKinopoisk,
    ratingImdb,
    reviewsCount,
    ratingGoodReview,
}) => {
    return (
        <div className={styles.ratings__wrapper}>
            {ratingKinopoisk && (
                <div className={styles.ratings__wrapper__kp}>
                    KP {ratingKinopoisk}
                </div>
            )}
            {ratingImdb && (
                <div className={styles.ratings__wrapper__imdb}>
                    IM {ratingImdb}
                </div>
            )}
            {reviewsCount && ratingGoodReview ? (
                <div className={styles.votes}>
                    <label htmlFor="votes">
                        A total of {ratingGoodReview}% positive out of{' '}
                        {reviewsCount} evaluations
                    </label>
                    <div className={styles.progress__container}>
                        <progress
                            id="votes"
                            value={(reviewsCount * ratingGoodReview) / 100}
                            max={reviewsCount}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
};
