import { CollectionActionTypes } from './shop.action-types';
import { ICollection } from '../../shared/models/Shop';

export interface FetchCollectionItemsAction {
  type: CollectionActionTypes.FETCH_COLLECTION_ITEMS;
  payload: ICollection;
}

export type CollectionAction = FetchCollectionItemsAction;
