import React, { useContext, useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

import CategoryDropdown from "./CategoryDropdown"
import AreaDropdown from "./AreaDropdown"

function NavBar() {
	const { user, logout } = useContext(AuthContext);
	const pathname = window.location.pathname;

	let path = pathname === '/' ? 'home' : pathname.substr(1);

	const [activeItem, setActiveItem] = useState(path);

	const handleItemClick = (e, { name }) => setActiveItem(name);

	const NavBar = user ? (
		<Menu pointing secondary size="massive" color="teal">
			<Menu.Item name={user.username} active as={Link} to="/" />
			<Menu.Menu position="right">
				<Menu.Item name="logout " onClick={logout} />
			</Menu.Menu>
		</Menu>
	) : (
		<Menu pointing secondary size="massive" color="teal">
			<Menu.Item
				name="home"
				active={activeItem === 'home'}
				onClick={handleItemClick}
				as={Link}
				to="/"
			/>
			<Menu.Menu position="right">
				<Menu.Item>
					<Input icon="search" placeholder="Search..." />
					<CategoryDropdown />
					<AreaDropdown />
				</Menu.Item>
				<Menu.Item
					name="register"
					active={activeItem === 'register'}
					onClick={handleItemClick}
					as={Link}
					to="/register"
				/>
				<Menu.Item
					name="login"
					active={activeItem === 'login'}
					onClick={handleItemClick}
					as={Link}
					to="/login"
				/>
			</Menu.Menu>
		</Menu>
	);

	return NavBar;
}

export default NavBar;
