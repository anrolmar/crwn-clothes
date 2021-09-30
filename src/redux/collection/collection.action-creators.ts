import { CollectionActionTypes } from './collection.action-types';
import { FetchCollectionItemsAction } from './collection.actions';
import SHOP_DATA from '../../constants/shop-data';

export const fetchCollectionItems = (): FetchCollectionItemsAction => {
  return {
    type: CollectionActionTypes.FETCH_COLLECTION_ITEMS,
    payload: SHOP_DATA,
  };
};
