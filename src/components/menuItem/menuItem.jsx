import React from 'react';
import { withRouter } from 'react-router-dom';

// Stylesheet
import './menuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			className="background-image"
			style={{ backgroundImage: `url(${imageUrl})` }}
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW &#10095;</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
