import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './signInPage.scss';

// Components
import SignIn from '../../components/signIn/signIn.jsx';
import SignUp from '../../components/signUp/signUp';

const SignInPage = () => (
	<div className="sign-in-and-sign-up">
		<div className="checkout-page-banner">
			<span className="checkout-title">SIGN-IN / SIGN-UP</span>
		</div>
		<SignIn />
		<SignUp />
		<Link to="/shop" className="link-back-to-collections">
			<span>
				&#x02190; &#x02190; &#x02190; BACK TO COLLECTIONS &#x02192;
				&#x02192; &#x02192;
			</span>
		</Link>
	</div>
);

export default SignInPage;
