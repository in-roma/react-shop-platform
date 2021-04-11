import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Stylesheet
import './stripeButton.scss';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const pusblishKey =
		'pk_test_51IZwcYG1ckaZTP2OvpQqB83DOjETJkv4WUYA6ei4YpRY0N6N4H9QVUILvUzy6tiBJMcPXcKDepqz6A7mUvHw4pJA003mza0hXQ';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="FAKESHOP / React Redux"
			billingAddress
			shippingAddress
			image=""
			description={`Your total price is $${price}.00`}
			amount={priceForStripe}
			token={onToken}
			stripeKey={pusblishKey}
		>
			<button className="stripe-custom-button">Pay Now</button>
		</StripeCheckout>
	);
};

export default StripeButton;
