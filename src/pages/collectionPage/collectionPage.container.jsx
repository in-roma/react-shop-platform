import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Redux
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

// Components
import WithSpinner from '../../components/spinner/withSpinner';
import CollectionPage from '../collectionPage/collectionPage';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner(CollectionPage)
);

export default CollectionPageContainer;
