import React, { FC } from 'react';

import styles from './GenreTile.module.css';

interface GenreProps {
    genre: string;
}

export const GenreTile: FC<GenreProps>= ({genre}) =>  {
    return <span className={styles.genreTile}>{genre}</span>;
};
