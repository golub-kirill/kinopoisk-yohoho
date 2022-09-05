import React, { FC, memo } from 'react';
import { BsArrowLeftCircleFill, BsBookmarkStar } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../UI/Button/Button';

import styles from './Navbar.module.css';
import { Search } from './components/Search/Search';

interface Props {}

export const Navbar: FC<Props> = memo((props: Props) => {
    const navigate = useNavigate();

    return (
        <div className={styles.navBar__wrapper}>
            <div className={styles.navBar__logo}>
                {window.location.hash ===
                ('' || '#/') ? (
                    <div>ЛИСИЧКИНО КИНО</div>
                ) : (
                    <Link to="/" className={styles.NavLink}>
                        <BsArrowLeftCircleFill id={styles.NavLink_icon} />
                        Main Page
                    </Link>
                )}
            </div>
            <Search />
            <div className={styles.navBar__menu}>
                <Button
                    onClick={() => navigate('/bookmarks')}
                    icon={<BsBookmarkStar />}>
                    Bookmarks
                </Button>

                {/* <Button
                    onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }}
                    icon={<BsPerson />}
                    disabled>
                    Login
                </Button> */}
            </div>
        </div>
    );
});
