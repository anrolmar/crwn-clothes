import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionOverviewContainer from '../../components/shop/collections-overview/CollectionOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';
import { Dispatch } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/collection/collection.action-creators';

interface ShopPageOwnProps {
  fetchCollectionsStart: () => void;
}

type ShopPageProps = ShopPageOwnProps & RouteComponentProps;

class ShopPage extends React.Component<ShopPageProps> {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): any => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
