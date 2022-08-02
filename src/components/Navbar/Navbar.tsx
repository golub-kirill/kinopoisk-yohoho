import React, { FC } from 'react';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { NavLink, useParams } from 'react-router-dom';

import { Button } from '../UI/Button/Button';

import styles from './Navbar.module.css';
import { Search } from './components/Search/Search';

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
            <Search />
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
