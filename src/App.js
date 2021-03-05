import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components
import HomePage from './pages/homePage/homePage.jsx';
import ShopPage from './pages/shopPage/shopPage.jsx';

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
