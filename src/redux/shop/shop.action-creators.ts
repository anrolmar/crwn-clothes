import {
  FetchCollectionsFailureAction,
  FetchCollectionsStartAction,
  FetchCollectionsSuccessAction,
} from './shop.actions';

import { ICollection } from '../../shared/models/Shop';
import { ShopActionTypes } from './shop.action-types';

export const fetchCollectionsStart = (): FetchCollectionsStartAction => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap: ICollection): FetchCollectionsSuccessAction => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMessage: string): FetchCollectionsFailureAction => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};
