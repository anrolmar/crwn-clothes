import './collection-overview.scss';

import { Dispatch, useEffect } from 'react';

import { CollectionAction } from '../../../redux/collection/collection.actions';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { ICollection } from '../../../shared/models';
import { RootState } from '../../../redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionItems } from '../../../redux/collection/collection.action-creators';
import { selectCollections } from '../../../redux/collection/collection.selectors';

interface CollectionOverviewProps {
  collection: ICollection;
  fetchShopCollections?: () => void;
}

const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collection, fetchShopCollections }) => {
  useEffect(() => {
    fetchShopCollections!();
  }, [fetchShopCollections]);

  const renderCollections = () => {
    return Object.values(collection).map((collectionItem) => (
      <CollectionPreview key={collectionItem.id} {...collectionItem} />
    ));
  };

  return <div className="collection-overview">{renderCollections()}</div>;
};

interface CollectionOverviewSelectorProps {
  collection: ICollection;
}

const mapStateToProps = createStructuredSelector<RootState, CollectionOverviewProps, CollectionOverviewSelectorProps>({
  collection: selectCollections,
});

const mapDispatchToProps = (dispatch: Dispatch<CollectionAction>) => ({
  fetchShopCollections: () => dispatch(fetchCollectionItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);
