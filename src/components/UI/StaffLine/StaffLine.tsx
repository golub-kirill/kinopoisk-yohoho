import React, { FC } from 'react';

import { IPerson } from '../../../models/IPerson';

import styles from './StaffLine.module.css';

interface Props {
    role: string;
    list: IPerson[];
}

export const StaffLine: FC<Props> = (props: Props) => {
    if (!props.list.length) {
        return null;
    }

    if (props.list.length > 5) {
        props.list = props.list.slice(0, 5); // limit to 5
    }

    return (
        <div id={props.role.toLowerCase()} className={styles.staffLine}>
            <span className={styles.staffLine__label}>{props.role}:</span>
            <span className={styles.staffLine__content}>
                {' '}
                {props.list.map((person, index) =>
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
                                {index !== props.list.length - 1 && ', '}
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
                            {index !== props.list.length - 1 && ', '}
                        </a>
                    )
                )}
            </span>
        </div>
    );
};
