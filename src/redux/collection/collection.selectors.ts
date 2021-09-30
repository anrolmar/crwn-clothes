import { RootState } from '../index';
import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollection = memoize((collectionUrlParam: string) =>
  createSelector([selectCollections], (collection) => collection[collectionUrlParam]),
);
