import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Stylesheet
import './shopPage.scss';

// Redux
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// Components
import CollectionOverviewContainer from '../../components/collectionOverview/collectionsOverviewContainer';
import CollectionPageContainer from '../../pages/collectionPage/collectionPage.container';

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match } = this.props;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
