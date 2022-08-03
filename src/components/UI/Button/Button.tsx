import React, { FC } from 'react';

import styles from './Button.module.css';

interface Props {
    onClick: () => void;
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

export const Button: FC<Props> = (props: Props) => {
    return (
        <button
            className={styles.styledButton || props.className}
            onClick={() => props.onClick()}>
            {props.children}
            {props.icon}
        </button>
    );
};
