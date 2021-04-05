import React from 'react';

// Components

import Spinner from '../spinner/spinner';

const WithSpinner = (WrappedComponents) => {
	return ({ isLoading, ...otherProps }) => {
		return isLoading ? <Spinner /> : <WrappedComponents {...otherProps} />;
	};
};

export default WithSpinner;
