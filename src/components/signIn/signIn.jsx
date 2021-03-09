import React from 'react';
import './signIn.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

// Components
import FormInput from '../formInput/formInput.jsx';
import Button from '../button/button.jsx';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
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

					<Button type="submit" className="form-button">
						Sign-In
					</Button>
					<Button onClick={signInWithGoogle}>
						Sign-In with Google
					</Button>
				</form>
			</div>
		);
	}
}

export default SignIn;
