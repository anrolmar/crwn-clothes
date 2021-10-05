import { Route, RouteComponentProps } from 'react-router-dom';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/collection/collection.selectors';

import CollectionPage from '../collection/CollectionPage';
import CollectionsOverview from '../../components/shop/collections-overview/CollectionsOverview';
import { Dispatch } from 'redux';
import React from 'react';
import { RootState } from '../../redux/index';
import WithSpinner from '../../shared/components/with-spinner/WithSpinner';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/collection/collection.action-creators';

interface ShopPageOwnProps {
  fetchCollectionsStart: () => void;
  isCollectionsFetching: boolean;
  isCollectionsLoaded: boolean;
}

type ShopPageProps = ShopPageOwnProps & RouteComponentProps;

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component<ShopPageProps> {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { isCollectionsFetching, isCollectionsLoaded, match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
        />
      </div>
    );
  }
}

interface ShopPageSelectorProps {
  isCollectionsFetching: boolean;
  isCollectionsLoaded: boolean;
}

const mapStateToProps = createStructuredSelector<RootState, ShopPageSelectorProps>({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): any => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
