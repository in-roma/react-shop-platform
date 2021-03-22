import React from 'react';
import './cart-dropdown.scss';

// Components
import Button from '../button/button';

const CartDropDown = () => (
	<div className="cart-dropdown">
		<div className="cart-items"></div>
		<Button>GO TO CHECKOUT</Button>
	</div>
);

export default CartDropDown;
