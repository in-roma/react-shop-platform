import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

// Redux
import { selectDirectorySections } from '../../redux/directory/directory.selector';

// Components
import MenuItem from '../menuItem/menuItem';

// Stylesheet
import './frameContents.scss';

const FrameContents = ({ directory }) => {
	return (
		<div className="frame-contents">
			{directory.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
			<Link to="/shop" className="link-collections">
				<span>ALL COLLECTIONS</span>
			</Link>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	directory: selectDirectorySections,
});

export default connect(mapStateToProps)(FrameContents);
