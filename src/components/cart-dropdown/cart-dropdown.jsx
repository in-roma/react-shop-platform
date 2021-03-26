import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

// Components
import Button from '../button/button';
import CartItem from '../cart-item/cartItem';

// Stylesheet
import './cart-dropdown.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empty-message">Your Cart is empty</span>
			)}
		</div>
		<Button
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</Button>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
