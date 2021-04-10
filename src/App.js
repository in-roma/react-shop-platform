import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Firestore
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Stylesheet
import { GlobalStyle } from './global.styles';

// Components
import Spinner from './components/spinner/spinner';
import Header from './components/header/header.jsx';

// Redux
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from '../src/redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

// Lazy
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import SignInPage from './pages/signInPage/signInPage';
import CheckOutPage from './pages/checkOutPage/checkOutPage';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />

					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInPage />
							)
						}
					/>
					<Route exact path="/checkout" component={CheckOutPage} />
				</Switch>
			</React.Fragment>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
