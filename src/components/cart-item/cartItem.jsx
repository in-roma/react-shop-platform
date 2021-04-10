import React from 'react';

// Stylesheet
import './cartItem.scss';

const cartItem = ({
	item: { imageUrl, price, name, quantity },
	removeItem,
}) => (
	<div className="cart-item">
		<div className="cart-image">
			<img src={imageUrl} alt="item" />
		</div>
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x ${price}
			</span>
			<div className="cart-item-cross" onClick={removeItem}>
				&#10005;
			</div>
		</div>
	</div>
);

export default cartItem;
