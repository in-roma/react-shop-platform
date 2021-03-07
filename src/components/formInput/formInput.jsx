import React from 'react';
import './formInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		<input
			type="text"
			className="from-input"
			onChange={handleChange}
			{...otherProps}
		/>
	</div>
);
