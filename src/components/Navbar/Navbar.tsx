import React, { FC, memo } from 'react';
import {
    BsArrowLeftCircleFill,
    BsBookmarkStar,
    BsPerson,
} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../UI/Button/Button';
import Logo from '../../assets/logo.png';

import styles from './Navbar.module.css';
import { Search } from './components/Search/Search';

interface Props {}

export const Navbar: FC<Props> = memo((props: Props) => {
    const navigate = useNavigate();

    return (
        <div className={styles.navBar__wrapper}>
            {window.location.hash === ('' || '#/') ? (
                <img className={styles.navBar__logo} src={Logo} alt="logo" />
            ) : (
                <Button
                    onClick={() => navigate('/')}
                    icon={<BsArrowLeftCircleFill />}>
                    Main Page
                </Button>
            )}

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
