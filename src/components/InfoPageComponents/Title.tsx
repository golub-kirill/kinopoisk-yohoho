import React, { FC, memo } from 'react';

import styles from '../../pages/InfoPage/InfoPage.module.css';

interface TitleProps {
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    year: number;
    ratingAgeLimits: string;
    ratingMpaa: string;
}

export const Title: FC<TitleProps> = memo(
    ({ nameRu, nameEn, nameOriginal, year, ratingAgeLimits, ratingMpaa }) => {
        return (
            <div className={styles.infoPage__content__info__title}>
                <span className={styles.infoPage__content__info__title__ru}>
                    {nameRu ? nameRu : nameOriginal} {`(${year})`}
                    {ratingAgeLimits && (
                        <span className={styles.infoPage__ageLimit}>
                            {`${ratingAgeLimits?.substring(3, 5)}+`}
                        </span>
                    )}
                    {ratingMpaa && (
                        <span className={styles.infoPage__ageLimit}>
                            {ratingMpaa?.toUpperCase()}
                        </span>
                    )}
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
