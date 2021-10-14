import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collection-page.styles';

import CollectionItem from '../../components/shop/collection-item/CollectionItem';
import { ICollectionItem } from '../../shared/models/Shop';
import { RootState } from '../../redux/root.reducers';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

interface CollectionPageOwnProps {
  collection: ICollectionItem;
}

interface RouteParams {
  collectionId: string;
}

type CollectionPageProps = CollectionPageOwnProps & RouteComponentProps<RouteParams>;

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
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

const mapStateToProps = (state: RootState, ownProps: CollectionPageProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
