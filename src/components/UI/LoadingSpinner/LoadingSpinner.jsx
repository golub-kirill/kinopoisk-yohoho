import React from 'react';

import styles from './LoadingSpinner.module.css';

export const LoadingSpinner = () => {
    return (
        <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
    );
};
