import WithSpinner, { WithSpinnerProps } from '../../shared/components/with-spinner/WithSpinner';

import CollectionPage from './CollectionPage';
import { RootState } from '../../redux/root.reducers';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector<RootState, WithSpinnerProps>({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose<React.FC>(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionPageContainer;
