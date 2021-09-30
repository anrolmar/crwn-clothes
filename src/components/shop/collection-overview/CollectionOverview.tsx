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
  collections?: ICollection[];
  fetchShopCollections?: () => void;
}

const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collections, fetchShopCollections }) => {
  useEffect(() => {
    fetchShopCollections!();
  }, [fetchShopCollections]);

  const renderCollections = () => {
    return collections!.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));
  };

  return <div className="collection-overview">{renderCollections()}</div>;
};

interface CollectionOverviewSelectorProps {
  collections: ICollection[];
}

const mapStateToProps = createStructuredSelector<RootState, CollectionOverviewProps, CollectionOverviewSelectorProps>({
  collections: selectCollections,
});

const mapDispatchToProps = (dispatch: Dispatch<CollectionAction>) => ({
  fetchShopCollections: () => dispatch(fetchCollectionItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);
