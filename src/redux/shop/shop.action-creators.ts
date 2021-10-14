import { CollectionActionTypes } from './shop.action-types';
import { FetchCollectionItemsAction } from './shop.actions';
import SHOP_DATA from '../../constants/shop-data';

export const fetchCollectionItems = (): FetchCollectionItemsAction => {
  return {
    type: CollectionActionTypes.FETCH_COLLECTION_ITEMS,
    payload: SHOP_DATA,
  };
};
