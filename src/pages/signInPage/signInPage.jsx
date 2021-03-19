import React from 'react';
import './signInPage.scss';

// Components

import SignIn from '../../components/signIn/signIn.jsx';
import SignUp from '../../components/signUp/signUp';

const SignInPage = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInPage;
