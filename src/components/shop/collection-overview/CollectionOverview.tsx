import './collection-overview.scss';

import CollectionPreview from '../collection-preview/CollectionPreview';
<<<<<<< HEAD
import CollectionsContext from '../../../contexts/collections/collections.context';
import { useContext } from 'react';
=======
import { ICollectionItem } from '../../../shared/models';
import { RootState } from '../../../redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../../redux/shop/shop.selectors';
>>>>>>> 13fbd2650ae46d57662ea5dc4d171a4630fbe704

const CollectionOverview: React.FC = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collectionItems = Object.keys(collectionsMap).map((key) => collectionsMap[key]);

  const renderCollections = () => {
    return collectionItems.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));
  };

  return <div className="collection-overview">{renderCollections()}</div>;
};

export default CollectionOverview;
