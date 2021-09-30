import './collection-page.scss';

import { ICollection } from '../../shared/models/Shop';
import { RootState } from '../../redux/index';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/collection/collection.selectors';

interface CollectionOwnProps {
  collection: ICollection | undefined;
}

interface CollectionMatchParams {
  collectionId: string;
}

type CollectionPageProps = CollectionOwnProps & RouteComponentProps<CollectionMatchParams>;

const CollectionPage: React.FC<CollectionPageProps> = () => {
  return (
    <div className="category">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state: RootState, ownProps: CollectionPageProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
