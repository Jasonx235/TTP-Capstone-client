import React, { useContext, useState } from 'react';
import { Menu, Form, Button } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthContext } from '../context/auth';
import CategoryDropdown from './CategoryDropdown';
import AreaDropdown from './AreaDropdown';
import { getRecipes } from '../actions/recipes';

function NavBar(props) {
	const { user, logout } = useContext(AuthContext);
	const [search, setSearch] = useState({ search: '' });
	const pathname = window.location.pathname;

	const history = useHistory();

	let path = pathname === '/' ? 'home' : pathname.substr(1);

	const [activeItem, setActiveItem] = useState(path);

	const handleItemClick = (e, { name }) => setActiveItem(name);

	const dispatch = useDispatch();

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(search);
		await dispatch(getRecipes(search));
		history.push('/SearchPage');
	};
	const onChange = (e) => {
		const { name, value } = e.target;
		setSearch({ ...search, [name]: value });
	};

	const NavBar = user ? (
		<Menu pointing secondary size="big" color="teal">
			<Menu.Item name={user.username} active as={Link} to="/" />
			<Menu.Item>
				<Form className="searchBarDisplay" onSubmit={onSubmit}>
					<Form.Field>
						<Form.Input
							placeholder="Search.."
							name="search"
							value={search.search}
							onChange={onChange}
						/>
					</Form.Field>
					<Button type="submit">Submit</Button>
				</Form>
			</Menu.Item>
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
			<Menu.Item>
				<Form onSubmit={onSubmit}>
					<Form.Field>
						<Form.Input
							placeholder="Search.."
							name="search"
							value={search.search}
							onChange={onChange}
						/>
					</Form.Field>
					<Button type="submit">Submit</Button>
				</Form>
			</Menu.Item>
			<Menu.Menu position="right">
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
