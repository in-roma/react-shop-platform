import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Stylesheet
import './shopPage.scss';

// Redux
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
	selectIsCollectionsFetching,
	selectIsCollectionLoaded,
} from '../../redux/shop/shop.selector';

// Components
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collectionPage/collectionPage';
import WithSpinner from '../../components/spinner/withSpinner';
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const {
			match,
			isCollectionFetching,
			selectIsCollectionLoaded,
		} = this.props;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={!selectIsCollectionLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionsFetching,
	isCollectionsLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
