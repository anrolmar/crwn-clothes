import { ICollection } from '../../shared/models/Shop';
import { ShopActionTypes } from './shop.action-types';

export interface FetchCollectionsStartAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_START;
}

export interface FetchCollectionsSuccessAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: ICollection;
}

export interface FetchCollectionsFailureAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload: string | undefined;
}

export type ShopAction = FetchCollectionsStartAction | FetchCollectionsSuccessAction | FetchCollectionsFailureAction;
