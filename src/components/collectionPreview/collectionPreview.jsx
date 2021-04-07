import React from 'react';

// Components
import CollectionItem from '../collectionItem/collectionItem.jsx';

// Stylesheet
import './collectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<div className="preview-title">
			<div className="title">{title.toUpperCase()}</div>
		</div>
		<div className="preview">
			{items
				.filter((item, i) => i < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
