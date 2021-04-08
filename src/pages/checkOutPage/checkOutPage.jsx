import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

// Redux
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

// Components
import CheckOutItem from '../../components/checkoutItem/checkOutItem';
import StripeButton from '../../components/stripeButton/stripeButton';

// Stylesheet
import './checkoutPage.scss';

const CheckOutPage = ({ cartItems, total }) => (
	<div className="checkout-page-container">
		<div className="checkout-page-banner">
			<span className="checkout-title">CHECKOUT</span>
		</div>
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckOutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
			<StripeButton price={total} />
		</div>
		<Link to="/shop" className="link-back-to-collections">
			<span>
				&#x02190; &#x02190; &#x02190; BACK TO SHOPPING &#x02190;
				&#x02190; &#x02190;
			</span>
		</Link>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
