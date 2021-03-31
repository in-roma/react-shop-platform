import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Redux
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selector';

// Components
import WithSpinner from '../../components/spinner/withSpinner';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionsFetching,
});

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner(CollectionOverview)
);

export default CollectionOverviewContainer;
