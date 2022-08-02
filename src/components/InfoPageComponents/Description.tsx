import React, { FC, memo } from 'react';

import styles from '../../pages/InfoPage/InfoPage.module.css';

interface Props {
    description: string | undefined;
}

export const Description: FC<Props> = memo((props: Props) => {
    return (
        <p className={styles.infoPage__content__info__description}>
            {props.description}
        </p>
    );
});
