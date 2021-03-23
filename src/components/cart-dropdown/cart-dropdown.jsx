import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.scss';

// Components
import Button from '../button/button';
import CartItem from '../cart-item/cartItem';

const CartDropDown = ({ cartItems }) => (
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
		<Button>GO TO CHECKOUT</Button>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
