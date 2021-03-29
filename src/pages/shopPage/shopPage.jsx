import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Firestore
import {
	firestore,
	convertCollectionsSnapShotToMap,
} from '../../firebase/firebase.utils';

// Redux
import { updateCollections } from '../../redux/shop/shop.actions';

// Components
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collectionPage/collectionPage';

// Stylesheet
import './shopPage.scss';

class ShopPage extends React.Component {
	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');
		this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
			async (snapShot) => {
				const collectionMap = convertCollectionsSnapShotToMap(snapShot);
				updateCollections(collectionMap);
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

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) =>
		dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
