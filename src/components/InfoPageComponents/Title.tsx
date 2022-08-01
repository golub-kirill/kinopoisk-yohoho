import React, { FC, memo } from 'react';

import styles from '../../pages/InfoPage/InfoPage.module.css';

interface TitleProps {
    nameRu: string | undefined;
    nameEn: string | undefined;
    nameOriginal: string | undefined;
    year: number | undefined;
    ratingAgeLimits: string | undefined;
}

export const Title: FC<TitleProps> = memo(
    ({ nameRu, nameEn, nameOriginal, year, ratingAgeLimits }) => {
        return (
            <div className={styles.infoPage__content__info__title}>
                <span className={styles.infoPage__content__info__title__ru}>
                    {`${nameRu} (${year})`}
                    <span className={styles.infoPage__ageLimit}>
                        {`${ratingAgeLimits?.substring(3, 5)}+`}
                    </span>
                </span>
                {nameEn ||
                    (nameOriginal && (
                        <p
                            className={
                                styles.infoPage__content__info__title__en
                            }>
                            {`${nameEn || nameOriginal}`}
                        </p>
                    ))}
            </div>
        );
    }
);
