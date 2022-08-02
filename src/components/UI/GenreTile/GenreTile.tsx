import React, { FC } from 'react';

import styles from './GenreTile.module.css';

interface Props {
    genre: string;
}

export const GenreTile: FC<Props>= (props: Props) =>  {
    return <span className={styles.genreTile}>{props.genre}</span>;
};
