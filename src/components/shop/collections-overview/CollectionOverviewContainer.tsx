import WithSpinner, { WithSpinnerProps } from '../../../shared/components/with-spinner/WithSpinner';

import CollectionsOverview from './CollectionsOverview';
import { RootState } from '../../../redux/root.reducers';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching } from '../../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector<RootState, WithSpinnerProps>({
  isLoading: selectIsCollectionsFetching,
});

const CollectionOverviewContainer = compose<React.FC>(connect(mapStateToProps), WithSpinner)(CollectionsOverview);

export default CollectionOverviewContainer;
