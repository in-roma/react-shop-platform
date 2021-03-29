import React from 'react';
import { Route } from 'react-router-dom';

// Firestore
import {
	firestore,
	convertCollectionsSnapShotToMap,
} from '../../firebase/firebase.utils';

// Components
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collectionPage/collectionPage';

// Stylesheet
import './shopPage.scss';

class ShopPage extends React.Component {
	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const collectionRef = firestore.collection('collections');
		this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
			async (snapShot) => {
				const collectionMap = convertCollectionsSnapShotToMap(snapShot);
				console.log(collectionMap);
			}
		);
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverview}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

export default ShopPage;
