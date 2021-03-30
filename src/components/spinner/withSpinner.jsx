import React from 'react';

// Styled components
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const WithSpinner = (WrappedComponents) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponents {...otherProps} />
		);
	};
	return Spinner;
};

export default WithSpinner;
