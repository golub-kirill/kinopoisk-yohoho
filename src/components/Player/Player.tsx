import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Player.module.css';

export const Player = () => {
    const params = useParams();
    const filmId: number = Number(params.filmId);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//yohoho.cc/yo.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className={styles.player__wrapper}>
            <div id="yohoho" data-kinopoisk={filmId}></div>
        </div>
    );
};
