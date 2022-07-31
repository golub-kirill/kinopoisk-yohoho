import React, { FC } from 'react';

import { IPerson } from '../../../models/IPerson';

import styles from './StaffLine.module.css';

interface StaffLineProps {
    role: string;
    list : IPerson[];
}

export const StaffLine: FC<StaffLineProps> = ({ role, list }) => {
    if (!list.length) {
        return null;
    }
    return (
        <div id={role.toLowerCase()} className={styles.staffLine}>
            <span className={styles.staffLine__label}>{role}:</span>
            <span className={styles.staffLine__content}>
                {' '}
                {list.map((person, index) => (
                    <span key={index}>
                        {(person.nameRu || person.nameEn)}
                        {index !== list.length - 1 && ', '}
                    </span>
                ))}
            </span>
        </div>
    );
};
