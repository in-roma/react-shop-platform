import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

// Components
import FormInput from '../formInput/formInput.jsx';
import Button from '../button/button.jsx';

// Stylesheet
import './signIn.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}
	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign-in with your email & password</span>

				<form onSubmit={this.handleSubmit} className="form-signIn">
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						placeholder="Email"
						// required
					/>

					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						placeholder="Password"
						// required
					/>
					<div className="buttons">
						<Button type="submit">Sign-In</Button>
						<Button onClick={signInWithGoogle} isGoogleSignIn>
							Sign-In with Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
