import React from 'react';

import styles from './PlayerPage.module.css';

export const PlayerPage = () => {
    return (
        <div className={styles.player__wrapper}>
            <h1>PlayerPage</h1>
            <div id="yohoho" data-kinopoisk="401522"></div>
            <script src="//yohoho.cc/yo.js"></script>
        </div>
    );
};
