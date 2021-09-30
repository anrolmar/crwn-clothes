import { RootState } from '../index';
import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

type CollectionIdsMap = {
  [key: string]: number;
};
const COLLECTION_ID_MAP: CollectionIdsMap = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollection = memoize((collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) =>
    collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]),
  ),
);
