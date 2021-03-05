import React from 'react';
import SHOP_DATA from '../../data/shop.data.js';

// Components

import CollectionPreview from '../../components/collectionPreview/collectionPreview.jsx';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherSectionProps }) => (
					<CollectionPreview key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
