import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './collectionPreview.scss';

// Components
import CollectionItem from '../collectionItem/collectionItem.jsx';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<Link to={`/shop/${title.toLowerCase()}`} className="preview-title">
			<div className="title">{title.toUpperCase()}</div>
		</Link>
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
