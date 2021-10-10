import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collection-page.styles';

import CollectionItem from '../../components/shop/collection-item/CollectionItem';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface RouteParams {
  collectionId: string;
}

const CollectionPage: React.FC = () => {
  const { collectionId } = useParams<RouteParams>();
  const collection = useSelector(useMemo(() => selectCollection(collectionId), [collectionId]));
  const { title, items } = collection;

  const renderItems = () => {
    return items.map((item) => <CollectionItem key={item.id} item={item} />);
  };

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>{renderItems()}</CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
