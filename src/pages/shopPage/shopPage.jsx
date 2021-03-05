import React from 'react';

import SHOP_DATA from '../../data/shop.data.js';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		return (
			<React.Fragment>
				<h1>SHOP PAGE</h1>
			</React.Fragment>
		);
	}
}

export default ShopPage;
