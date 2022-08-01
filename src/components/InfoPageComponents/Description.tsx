import React, { FC, memo } from 'react';

import styles from '../../pages/InfoPage/InfoPage.module.css';

interface DescriptionProps {
    description: string | undefined;
}

export const Description: FC<DescriptionProps> = memo(({ description }) => {
    return (
        <p className={styles.infoPage__content__info__description}>
            {description}
        </p>
    );
});
