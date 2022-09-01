import React, { FC, memo } from 'react';
import classNames from 'classnames';

import styles from './Ratings.module.css';

interface Props {
    ratingKinopoisk: number;
    ratingImdb: number;
    reviewsCount?: number;
    ratingGoodReview?: number;
    className?: string;
}

export const Ratings: FC<Props> = memo((props: Props) => {
    return (
        <div className={classNames(styles.ratings__wrapper, props.className)}>
            {props.ratingKinopoisk && (
                <div className={styles.ratings__wrapper__kp}>
                    KP {props.ratingKinopoisk}
                </div>
            )}
            {props.ratingImdb && (
                <div className={styles.ratings__wrapper__imdb}>
                    IM {props.ratingImdb}
                </div>
            )}
            {props.reviewsCount && props.ratingGoodReview ? (
                <div className={styles.votes}>
                    <label htmlFor="votes">
                        A total of {props.ratingGoodReview}% positive out of{' '}
                        {props.reviewsCount} evaluations
                    </label>
                    <div className={styles.progress__container}>
                        <progress
                            id="votes"
                            value={
                                (props.reviewsCount * props.ratingGoodReview) /
                                100
                            }
                            max={props.reviewsCount}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
});
