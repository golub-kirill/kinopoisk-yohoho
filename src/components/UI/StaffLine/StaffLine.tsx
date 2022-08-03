import React, { FC, memo } from 'react';

import { IPerson } from '../../../models/IPerson';

import styles from './StaffLine.module.css';

interface Props {
    role: string;
    list: IPerson[];
}

export const StaffLine: FC<Props> = memo(({role, list}) => {

    
    if (!list.length) {
        return null;
    }

    if (list.length > 5) {
        list = list.slice(0, 5); // limit to 5
    }

    return (
        <div id={role.toLowerCase()} className={styles.staffLine}>
            <span className={styles.staffLine__label}>{role}:</span>
            <span className={styles.staffLine__content}>
                {' '}
                {list.map((person, index) =>
                    person.professionKey.toLowerCase() === 'actor' ? (
                        person.description && (
                            <a
                                className={styles.staffLine__person}
                                key={index}
                                href={
                                    'https://www.kinopoisk.ru/name/' +
                                    person.staffId
                                }
                                target="_blank"
                                rel="noreferrer"
                                title={person.description}
                                >
                                {person.nameRu || person.nameEn}
                                {index !== list.length - 1 && ', '}
                            </a>
                        )
                    ) : (
                        <a
                            className={styles.staffLine__person}
                            key={index}
                            href={
                                'https://www.kinopoisk.ru/name/' +
                                person.staffId
                            }
                            target="_blank"
                            rel="noreferrer">
                            {person.nameRu || person.nameEn}
                            {index !== list.length - 1 && ', '}
                        </a>
                    )
                )}
            </span>
        </div>
    );
});
