import React from 'react';
import './frameContents.scss';

// Components

import MenuItem from './menuItem';

const frameContents = () => (
	<div className="frame-contents">
		<MenuItem title="Hats" subtitle="Shop Now" />
		<MenuItem title="Jackets" subtitle="Shop Now" />
		<MenuItem title="Sneakers" subtitle="Shop Now" />
		<MenuItem title="Womens" subtitle="Shop Now" />
		<MenuItem title="Mens" subtitle="Shop Now" />
	</div>
);

export default frameContents;
