import React from 'react';
import './collectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<div className="collection-item">
		<div
			className="image"
			style={{ backgroundImage: `url(${imageUrl})` }}
		></div>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price}.00$</span>
		</div>
	</div>
);

export default CollectionItem;
