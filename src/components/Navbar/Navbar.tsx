import React, { FC } from 'react';
import { BsArrowLeftCircleFill, BsSearch } from 'react-icons/bs';
import { NavLink, useParams } from 'react-router-dom';

import { Button } from '../UI/Button/Button';

import styles from './Navbar.module.css';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
    const params = useParams();

    return (
        <div className={styles.navBar__wrapper}>
            <div className={styles.navBar__logo}>
                {params.filmId ? (
                    <NavLink to="/" className={styles.NavLink}>
                        <BsArrowLeftCircleFill id={styles.NavLink_icon} />
                        Main Page
                    </NavLink>
                ) : (
                    <div>ЛИСИЧКИНО КИНО</div>
                )}
            </div>
            <div className={styles.navBar__search}>
                <input type="text" placeholder="Search" />
                <button>
                    <BsSearch id={styles.navBar__search_icon} />
                </button>
            </div>
            <div className={styles.navBar__menu}>
                <Button
                    onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }}>
                    Login
                </Button>
            </div>
        </div>
    );
};

