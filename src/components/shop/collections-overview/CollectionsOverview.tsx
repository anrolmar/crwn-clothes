import { CollectionOverviewContainer } from './collections-overview.styles';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../../redux/shop/shop.selectors';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const CollectionsOverview: React.FC = () => {
  const collectionItems = useSelector(useMemo(() => selectCollectionsForPreview, []));

  const renderCollections = () => {
    return collectionItems!.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));
  };

  return <CollectionOverviewContainer>{renderCollections()}</CollectionOverviewContainer>;
};

export default CollectionsOverview;
