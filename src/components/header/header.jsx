import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

// Redux
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Components
import { ReactComponent as AccountIcon } from '../../assets/account-icon.svg';

// import { ReactComponent as Logo } from '../../assets/logo.svg';
import Logo from '../../assets/logo.png';
import CartIcon from '../cart-icon/cartIcon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

// Stylesheet
import './header.scss';

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<img className="logo" alt="logo" src={Logo} />
		</Link>
		<div className="header-sections ">
			<div className="header-section">
				{' '}
				<span className="header-display-name">{`${
					currentUser ? 'Hi ' + currentUser.displayName : ''
				}`}</span>
				{currentUser ? (
					<div
						className="header-section-sign-out"
						onClick={() => auth.signOut()}
					>
						Sign-Out
					</div>
				) : (
					<Link to="/signin">
						<AccountIcon className="account-icon" />
					</Link>
				)}
				<CartIcon />
			</div>
		</div>
		{hidden ? null : <CartDropDown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
