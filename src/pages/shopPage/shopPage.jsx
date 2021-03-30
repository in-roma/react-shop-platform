import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Stylesheet
import './shopPage.scss';

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
import WithSpinner from '../../components/spinner/withSpinner';
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

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
		this.setState({ loading: false });
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
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
