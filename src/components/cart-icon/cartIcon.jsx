import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cartIcon.scss';

const CartIcon = () => (
	<div className="cart-icon">
		<ShoppingIcon className="shopping-icon" />
		<div className="count-circle">
			<span className="item-count">0</span>
		</div>
	</div>
);

export default CartIcon;
