import React, { FC, memo, useEffect } from 'react';

import styles from './Player.module.css';

interface Props {
    filmId: number;
}

export const Player: FC<Props> = memo((props: Props) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//yohoho.cc/yo.js';
        script.async = true;
        document.body.appendChild(script);

        document
            .getElementById('yohoho')
            ?.setAttribute('data-kinopoisk', props.filmId.toString());

        return () => {
            document.body.removeChild(script);
        };
    }, [props.filmId]);

    return (
        <div className={styles.player__wrapper}>
            <div id="yohoho" data-kinopoisk={props.filmId}></div>
        </div>
    );
});
