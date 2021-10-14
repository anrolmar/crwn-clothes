import './collection-page.scss';

import CollectionItem from '../../components/shop/collection-item/CollectionItem';
import CollectionsContext from '../../contexts/collections/collections.context';
import { RouteComponentProps } from 'react-router-dom';
import { useContext } from 'react';

interface CollectionMatchParams {
  collectionId: string;
}

type CollectionPageProps = RouteComponentProps<CollectionMatchParams>;

const CollectionPage: React.FC<CollectionPageProps> = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  const renderItems = () => {
    return items.map((item) => <CollectionItem key={item.id} item={item} />);
  };

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">{renderItems()}</div>
    </div>
  );
};

export default CollectionPage;
