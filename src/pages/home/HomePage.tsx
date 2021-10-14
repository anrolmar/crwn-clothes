import './home-page.scss';

<<<<<<< HEAD
import Directory from '../../components/directory/Directory';
=======
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
>>>>>>> 13fbd2650ae46d57662ea5dc4d171a4630fbe704

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
