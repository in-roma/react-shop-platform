import React from 'react';
import './signIn.scss';

// Components
import FormInput from '../formInput/formInput.jsx';

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
				<h2>I already have an account</h2>
				<span>Sign-in with your email & password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						label="email"
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						label="password"
					/>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default SignIn;
