import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="header-sections">
			<Link to="/shop" className="header-section">
				Shop
			</Link>
			<Link to="/contact" className="header-section">
				Contact
			</Link>
			<Link to="/contact" className="header-section">
				Sign In
			</Link>
		</div>
	</div>
);

export default Header;
