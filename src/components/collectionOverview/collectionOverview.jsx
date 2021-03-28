import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

// Components
import CollectionPreview from '../collectionPreview/collectionPreview';

// Stylesheet
import './collectionOverview.scss';

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