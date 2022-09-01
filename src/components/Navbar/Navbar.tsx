import React, { FC, memo } from 'react';
import {
    BsArrowLeftCircleFill,
    BsBookmarkStar,
    BsPerson,
} from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';

import { Button } from '../UI/Button/Button';

import styles from './Navbar.module.css';
import { Search } from './components/Search/Search';

interface Props {}

export const Navbar: FC<Props> = memo((props: Props) => {
    const navigate = useNavigate();
    
    return (
        <div className={styles.navBar__wrapper}>
            <div className={styles.navBar__logo}>
                {document.location.pathname.length > 1  ? (
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
                    onClick={() => navigate('/bookmarks')}
                    icon={<BsBookmarkStar />}>
                    Bookmarks
                </Button>

                <Button
                    onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }}
                    icon={<BsPerson />}
                    disabled>
                    Login
                </Button>
            </div>
        </div>
    );
});
