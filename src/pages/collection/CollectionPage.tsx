import './collection-page.scss';

import CollectionItem from '../../components/shop/collection-item/CollectionItem';
import { ICollectionItem } from '../../shared/models';
import { RootState } from '../../redux/index';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/collection/collection.selectors';

interface CollectionOwnProps {
  collection: ICollectionItem;
}

interface CollectionMatchParams {
  collectionId: string;
}

type CollectionPageProps = CollectionOwnProps & RouteComponentProps<CollectionMatchParams>;

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
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

const mapStateToProps = (state: RootState, ownProps: CollectionPageProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
