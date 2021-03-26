import React from 'react';

// Stylesheet
import './formInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		{label ? (
			<label className={`${otherProps.value.length ? 'shrink' : ''}`}>
				{label}
			</label>
		) : null}
		<input className="form-input" onChange={handleChange} {...otherProps} />
	</div>
);

export default FormInput;
