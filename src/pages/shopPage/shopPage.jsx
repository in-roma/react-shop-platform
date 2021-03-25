import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selector';

// Components
import CollectionPreview from '../../components/collectionPreview/collectionPreview.jsx';

const ShopPage = ({ collections }) => {
	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherSectionProps }) => (
				<CollectionPreview key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
