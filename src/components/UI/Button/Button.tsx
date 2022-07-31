import React, { FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button
            className={styles.styledButton || className}
            onClick={() => onClick()}>
            {children}
        </button>
    );
};
