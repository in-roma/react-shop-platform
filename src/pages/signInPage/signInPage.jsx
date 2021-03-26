import React from 'react';

// Components
import SignIn from '../../components/signIn/signIn.jsx';
import SignUp from '../../components/signUp/signUp';

// Stylesheet
import './signInPage.scss';

const SignInPage = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInPage;
