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
		{label ? (
			<label className={`${otherProps.value.length ? 'shrink' : ''}`}>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
