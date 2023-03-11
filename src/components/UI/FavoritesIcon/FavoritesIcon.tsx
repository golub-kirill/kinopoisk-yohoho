import React, { FC } from 'react';
import { BsFillBookmarkHeartFill, BsHeartFill } from 'react-icons/bs';

import styles from './FavoritesIcon.module.css';

interface Props {
    counter: number;
}

const FavoritesIcon : FC<Props> = ({counter}) => {
    return <div className={styles.favoritesicon__wrapper}>
        <span className={styles.favoritesicon__count}>{counter}</span>
            
        
    </div>;
};

export default FavoritesIcon;
