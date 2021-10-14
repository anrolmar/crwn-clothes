import './collection-overview.scss';

import CollectionPreview from '../collection-preview/CollectionPreview';
import CollectionsContext from '../../../contexts/collections/collections.context';
import { useContext } from 'react';

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
