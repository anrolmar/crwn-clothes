import { Route, RouteComponentProps } from 'react-router-dom';

import { CollectionAction } from '../../redux/collection/collection.actions';
import CollectionPage from '../collection/CollectionPage';
import CollectionsOverview from '../../components/shop/collections-overview/CollectionsOverview';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchCollectionItems } from '../../redux/collection/collection.action-creators';
import { useEffect } from 'react';

interface ShopPageOwnProps {
  fetchShopCollections: () => void;
}

type ShopPageProps = ShopPageOwnProps & RouteComponentProps;

const ShopPage: React.FC<ShopPageProps> = ({ match, fetchShopCollections }) => {
  useEffect(() => {
    fetchShopCollections();
  }, [fetchShopCollections]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CollectionAction>) => ({
  fetchShopCollections: async () => dispatch(await fetchCollectionItems()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
