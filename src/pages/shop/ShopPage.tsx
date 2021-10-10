import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import CollectionOverviewContainer from '../../components/shop/collections-overview/CollectionOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';
import { Dispatch } from 'redux';
import { ShopAction } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.action-creators';
import { useDispatch } from 'react-redux';

const ShopPage: React.FC = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch<Dispatch<ShopAction>>();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route exact path={`${path}`} component={CollectionOverviewContainer} />
      <Route path={`${path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  );
};

export default ShopPage;
