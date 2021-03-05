import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components
import HomePage from './pages/homePage.jsx';

const HatsPage = () => (
	<div>
		<h1>Hats page</h1>
	</div>
);

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop/hats" component={HatsPage} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
