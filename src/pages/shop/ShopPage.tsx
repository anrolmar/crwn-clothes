import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionOverview from '../../components/shop/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
