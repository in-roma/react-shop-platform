import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

// Redux
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Components
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cartIcon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

// Stylesheet
import './header.scss';

const Header = ({ currentUser, hidden }) => (
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
				<div
					className="header-section-sign-out"
					onClick={() => auth.signOut()}
				>
					Sign-Out
				</div>
			) : (
				<Link to="/signin" className="header-section">
					Sign-In
				</Link>
			)}

			<CartIcon />
		</div>
		{hidden ? null : <CartDropDown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
