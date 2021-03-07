import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/header/header.jsx';
import HomePage from './pages/homePage/homePage.jsx';
import ShopPage from './pages/shopPage/shopPage.jsx';
import SignInPage from './pages/signInPage/signInPage.jsx';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SignInPage} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
