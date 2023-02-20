import React, { FC, memo, useEffect } from 'react';

import styles from './Player.module.css';

interface Props {
    filmId: string | undefined;
    imdbId: string | undefined;
}

export const Player: FC<Props> = memo(({ filmId, imdbId }) => {
    useEffect(() => {
        if (!filmId || !imdbId) return;
        const script = document.createElement('script');
        const player = document.getElementById('yohoho');
        script.src = '//yohoho.cc/yo.js';
        script.async = true;
        document.body.appendChild(script);

        player?.setAttribute('data-kinopoisk', filmId);
        player?.setAttribute('data-imdb', imdbId);

        return () => {
            document.body.removeChild(script);
        };
    }, [filmId, imdbId]);

    if (!filmId || !imdbId) return null;;

    return (
        <div className={styles.player__wrapper}>
            <div id="yohoho" data-kinopoisk={filmId}></div>
        </div>
    );
});
