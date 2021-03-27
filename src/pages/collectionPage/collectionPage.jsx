import React from 'react';
import { connect } from 'react-redux';

// Redux
import { selectCollection } from '../../redux/shop/shop.selector';

// Components
import CollectionItem from '../../components/collectionItem/collectionItem';

// Stylesheet
import './collectionPage.scss';

const CollectionPage = ({ collection }) => {
	return (
		<div className="collection-page">
			<h2>Collection PAge</h2>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	collection: selectCollection(ownProps.match.params.collectionID)(state);
};

export default connect(mapStateToProps)(CollectionPage);
