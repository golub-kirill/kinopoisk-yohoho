import React, { FC, memo, useEffect } from 'react';

import styles from './Player.module.css';

interface Props {
    filmId: string | undefined;
    imdbId: string | undefined;
}

export const Player: FC<Props> = memo((props: Props) => {

    useEffect(() => {
        if (!props.filmId || !props.imdbId) return;
        const script = document.createElement('script');
        const player = document.getElementById('yohoho');
        script.src = '//yohoho.cc/yo.js';
        script.async = true;
        document.body.appendChild(script);

        player?.setAttribute('data-kinopoisk', props.filmId);
        player?.setAttribute('data-imdb', props.imdbId);
        player?.setAttribute('data-videospider_tv', '0');

        return () => {
            document.body.removeChild(script);
        };
    }, [props.filmId, props.imdbId]);

    return (
        <div className={styles.player__wrapper}>
            <div id="yohoho" data-kinopoisk={props.filmId}></div>
        </div>
    );
});
