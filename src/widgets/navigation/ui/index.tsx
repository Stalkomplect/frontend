import { FC } from 'react';
import { Links } from '../config';
import { NavLink } from 'react-router-dom';
import { SearchBar } from '@/features/search';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/shared/ui/components/ui/sheet';
import { CallBack } from '@/features/callback';
import styles from './styles.module.scss';

import cart from '../assets/cart.svg';
import phone from '../assets/phone.svg';
import menu from '../assets/menu.svg';
import logo from '@/shared/assets/svg/logo.svg';

export const Navigation: FC = () => {
    return (
        <>
            {/* // desktop */}
            <header className={`${styles.stable} ${styles.navigation}`}>
                <nav className={`container-xxl ${styles.navigation__list}`}>
                    <NavLink to={'/'}>
                        <img
                            className={styles.navigation__list__logo}
                            src={logo}
                            alt='logo'
                        />
                    </NavLink>
                    <ul>
                        {Links.map((link) => (
                            <li key={link.id}>
                                <NavLink to={`/${link.link}`}>
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <NavLink to={'/shopping-cart'}>
                            <img src={cart} alt='cart' />
                        </NavLink>
                        <SearchBar />
                        <div className={styles.navigation__list__phone}>
                            <img src={phone} alt='phone' />
                            <p>8 (999) 999 99-99</p>
                        </div>
                    </ul>
                </nav>
            </header>
            <header className={styles.mobile_navigation}>
                <NavLink to={'/'}>
                    <img
                        className={styles.navigation__list__logo}
                        src={logo}
                        alt='logo'
                    />
                </NavLink>
                <ul className={styles.mobile_navigation__links}>
                    <NavLink to={'/shopping-cart'}>
                        <img src={cart} alt='cart' />
                    </NavLink>
                    <SearchBar />
                    <Sheet>
                        <SheetTrigger>
                            <img src={menu} alt='menu' />
                        </SheetTrigger>
                        <SheetContent
                            className={styles.mobile_navigation__links__body}
                        >
                            <SheetHeader
                                className={
                                    styles.mobile_navigation__links__body__header
                                }
                            >
                                <SheetTitle></SheetTitle>
                            </SheetHeader>
                            <ul
                                className={
                                    styles.mobile_navigation__links__body__links
                                }
                            >
                                <img src={logo} alt='logo' />
                                {Links.map((link) => (
                                    <SheetClose asChild key={link.id}>
                                        <NavLink
                                            to={`/${link.link}`}
                                            className={
                                                styles.mobile_navigation__links__body__links__link
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </SheetClose>
                                ))}
                                <CallBack />
                            </ul>
                            <div
                                style={{ margin: '40px auto', gap: '10px' }}
                                className={`flex items-center font-semibold`}
                            >
                                <img
                                    className='w-8'
                                    style={{
                                        filter: 'brightness(0) invert(50%)',
                                    }}
                                    src={phone}
                                    alt='phone'
                                />
                                <a
                                    style={{
                                        display: 'flex',
                                        color: 'var(--foregroud-support)',
                                    }}
                                >
                                    8 (999) 999 99-99
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </ul>
            </header>
        </>
    );
};
