import { Route, RouteComponentProps } from 'react-router-dom';

import { CollectionAction } from '../../redux/collection/collection.actions';
import CollectionPage from '../collection/CollectionPage';
import CollectionsOverview from '../../components/shop/collections-overview/CollectionsOverview';
import { Dispatch } from 'redux';
import { ICollectionItem } from '../../shared/models';
import React from 'react';
import WithSpinner from '../../shared/components/with-spinner/WithSpinner';
import { connect } from 'react-redux';
import { fetchCollectionItems } from '../../redux/collection/collection.action-creators';

interface ShopPageOwnProps {
  fetchShopCollections: () => void;
}

interface ShopPageState {
  loading: boolean;
}

type ShopPageProps = ShopPageOwnProps & RouteComponentProps;

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  state: ShopPageState = {
    loading: true,
  };

  componentDidMount() {
    this.props.fetchShopCollections();
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    const emptyCollection: ICollectionItem = {
      id: '',
      title: '',
      routeName: '',
      items: [],
    };
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} collectionItems={[]} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} collection={emptyCollection} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<CollectionAction>) => ({
  fetchShopCollections: async () => dispatch(await fetchCollectionItems()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
