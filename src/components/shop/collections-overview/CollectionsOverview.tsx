import { CollectionOverviewContainer } from './collections-overview.styles';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { ICollectionItem } from '../../../shared/models';
import { RootState } from '../../../redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../../redux/collection/collection.selectors';

interface CollectionsOverviewProps {
  collectionItems: ICollectionItem[];
}

const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({ collectionItems }) => {
  const renderCollections = () => {
    return collectionItems!.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));
  };

  return <CollectionOverviewContainer>{renderCollections()}</CollectionOverviewContainer>;
};

interface CollectionsOverviewSelectorProps {
  collectionItems: ICollectionItem[];
}

const mapStateToProps = createStructuredSelector<RootState, CollectionsOverviewProps, CollectionsOverviewSelectorProps>(
  {
    collectionItems: selectCollectionsForPreview,
  },
);

export default connect(mapStateToProps)(CollectionsOverview);
