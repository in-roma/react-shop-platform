import React from 'react';
import './frameContents.scss';
import SECTIONS_DATA from '../../data/sections.data';

// Components
import MenuItem from '../menuItem/menuItem';

class FrameContents extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: SECTIONS_DATA,
		};
	}

	render() {
		return (
			<div className="frame-contents">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default FrameContents;
