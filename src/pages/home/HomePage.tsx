import './home-page.scss';

import { CollectionAction } from '../../redux/shop/shop.actions';
import Directory from '../../components/directory/Directory';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchCollectionItems } from '../../redux/shop/shop.action-creators';
import { useEffect } from 'react';

interface HomePageOwnProps {
  fetchShopCollections?: () => void;
}

const HomePage: React.FC<HomePageOwnProps> = ({ fetchShopCollections }) => {
  useEffect(() => {
    fetchShopCollections!();
  }, [fetchShopCollections]);

  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CollectionAction>) => ({
  fetchShopCollections: () => dispatch(fetchCollectionItems()),
});

export default connect(null, mapDispatchToProps)(HomePage);
