import React from 'react';
import { connect } from 'react-redux';

// Stylesheet
import './collectionItem.scss';

// Redux
import { addItem } from '../../redux/cart/cart.action';

// Components
import Button from '../button/button';

const CollectionItem = ({ item, addItem }) => (
	<div className="collection-item">
		<div
			className="image"
			style={{ backgroundImage: `url(${item.imageUrl})` }}
		></div>
		<div className="collection-footer">
			<span className="name">{item.name}</span>
			<span className="price">{item.price}.00$</span>
		</div>
		<Button onClick={() => addItem(item)} inverted>
			Add to cart
		</Button>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
