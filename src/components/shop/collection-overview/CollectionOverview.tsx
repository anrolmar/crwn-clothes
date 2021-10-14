import './collection-overview.scss';

import CollectionPreview from '../collection-preview/CollectionPreview';
import { ICollectionItem } from '../../../shared/models';
import { RootState } from '../../../redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../../redux/shop/shop.selectors';

interface CollectionOverviewProps {
  collectionItems: ICollectionItem[];
}

const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collectionItems }) => {
  const renderCollections = () => {
    return collectionItems.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));
  };

  return <div className="collection-overview">{renderCollections()}</div>;
};

interface CollectionOverviewSelectorProps {
  collectionItems: ICollectionItem[];
}

const mapStateToProps = createStructuredSelector<RootState, CollectionOverviewProps, CollectionOverviewSelectorProps>({
  collectionItems: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
