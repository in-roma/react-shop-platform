import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import './header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="header-sections ">
			<span className="header-display-name">{`${
				currentUser ? 'Hi ' + currentUser.displayName : ''
			}`}</span>
			<Link to="/shop" className="header-section">
				Shop
			</Link>
			<Link to="/contact" className="header-section">
				Contact
			</Link>
			{currentUser ? (
				<div className="header-section" onClick={() => auth.signOut()}>
					Sign-Out
				</div>
			) : (
				<Link to="/signin" className="header-section">
					Sign-In
				</Link>
			)}
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
