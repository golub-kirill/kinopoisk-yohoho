import React, { FC, memo } from 'react';

import styles from '../../pages/InfoPage/InfoPage.module.css';

interface Props {
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    year: number;
    ratingAgeLimits: string;
    ratingMpaa: string;
}

export const Title: FC<Props> = memo(
    (props: Props) => {
        return (
            <div className={styles.infoPage__content__info__title}>
                <span className={styles.infoPage__content__info__title__ru}>
                    {props.nameRu ? props.nameRu : props.nameOriginal} {`(${props.year})`}
                    {props.ratingAgeLimits && (
                        <span className={styles.infoPage__ageLimit}>
                            {`${props.ratingAgeLimits?.substring(3, 5)}+`}
                        </span>
                    )}
                    {props.ratingMpaa && (
                        <span className={styles.infoPage__ageLimit}>
                            {props.ratingMpaa?.toUpperCase()}
                        </span>
                    )}
                </span>
                {props.nameEn ||
                    (props.nameOriginal && (
                        <p
                            className={
                                styles.infoPage__content__info__title__en
                            }>
                            {`${props.nameEn || props.nameOriginal}`}
                        </p>
                    ))}
            </div>
        );
    }
);
