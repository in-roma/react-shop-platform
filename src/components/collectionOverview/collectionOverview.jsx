import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Stylesheet
import './collectionOverview.scss';

// Redux
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

// Components
import CollectionPreview from '../collectionPreview/collectionPreview';

const CollectionOverview = ({ collections }) => (
	<div className="collection-overview">
		{collections.map(({ id, ...otherSectionProps }) => (
			<CollectionPreview key={id} {...otherSectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
