import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

// Components
import Header from './components/header/header.jsx';
import HomePage from './pages/homePage/homePage.jsx';
import ShopPage from './pages/shopPage/shopPage.jsx';
import SignInPage from './pages/signInPage/signInPage.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log('this is user:', user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInPage} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
