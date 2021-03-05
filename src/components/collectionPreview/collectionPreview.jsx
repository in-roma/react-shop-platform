import React from 'react';
import './collectionPreview.scss';

// Components

import CollectionItem from '../collectionItem/collectionItem.jsx';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, i) => i < 4)
				.map(({ id, ...otherSectionProps }) => (
					<CollectionItem key={id} {...otherSectionProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;