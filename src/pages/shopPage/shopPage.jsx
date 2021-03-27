import React from 'react';
import { Route } from 'react-router-dom';

// Components
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collectionPage/collectionPage';

// Stylesheet
import './shopPage.scss';

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route
			path={`${match.path}/:collectionId`}
			component={CollectionPage}
		/>
	</div>
);

export default ShopPage;
