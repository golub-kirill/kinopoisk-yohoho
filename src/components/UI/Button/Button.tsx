import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.css';

interface Props {
    onClick: () => void;
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export const Button: FC<Props> = (props: Props) => {
    return (
        <button
            className={classNames(styles.styledButton, props.className)}
            onClick={() => props.onClick()}
            disabled={props.disabled}>
            {props.children}
            &nbsp;
            {props.icon}
        </button>
    );
};
