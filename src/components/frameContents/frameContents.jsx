import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

// Stylesheet
import './frameContents.scss';

// Redux
import { selectDirectorySections } from '../../redux/directory/directory.selector';

// Components
import MenuItem from '../menuItem/menuItem';

const FrameContents = ({ directory }) => {
	return (
		<div className="frame-contents">
			{directory
				.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))
				.reverse()}
			<Link to="/shop" className="link-collections">
				<span>
					&#x02190; &#x02190; &#x02190; SEE COLLECTIONS &#x02192;
					&#x02192; &#x02192;
				</span>
			</Link>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	directory: selectDirectorySections,
});

export default connect(mapStateToProps)(FrameContents);
