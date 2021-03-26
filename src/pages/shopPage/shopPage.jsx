import React from 'react';

// Components
import CollectionOverview from '../../components/collectionOverview/collectionOverview';

// Stylesheet
import './shopPage.scss';

const ShopPage = ({ collections }) => {
	return (
		<div className="shop-page">
			<CollectionOverview />
		</div>
	);
};

export default ShopPage;
