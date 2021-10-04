import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionPage from '../collection/CollectionPage';
import CollectionsOverview from '../../components/shop/collections-overview/CollectionsOverview';

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
