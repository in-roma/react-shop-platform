import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Redux
import { selectCollection } from '../../redux/shop/shop.selector';

// Components
import CollectionItem from '../../components/collectionItem/collectionItem';

// Stylesheet
import './collectionPage.scss';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<div className="collection-title">
				<div className="title">{title}</div>
			</div>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
			<Link to="/shop" className="link-backto-collections">
				<span>
					&#x02190; &#x02190; &#x02190; TO ALL COLLECTIONS &#x02190;
					&#x02190; &#x02190;
				</span>
			</Link>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
