import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss';
import logo from 'assets/icons/logo.svg';

const Header: FC = () => {
	return (
		<header className={styles.headerContainer}>
			<img
				src={logo}
				alt="logo"
			/>
			<nav className={styles.navbar}>
				<li>
					<NavLink
						className={({isActive}) => (isActive ? styles.activeLink : styles.defaultLink)}
						to="/"
					>
						Главная
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({isActive}) => (isActive ? styles.activeLink : styles.defaultLink)}
						to="/trips"
					>
						Экскурсии
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({isActive}) => (isActive ? styles.activeLink : styles.defaultLink)}
						to="/account"
					>
						Личный кабинет
					</NavLink>
				</li>
			</nav>
		</header>
	);
};

export default Header;
