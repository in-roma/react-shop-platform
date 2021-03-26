import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	directory: selectDirectorySections,
});

export default connect(mapStateToProps)(FrameContents);
