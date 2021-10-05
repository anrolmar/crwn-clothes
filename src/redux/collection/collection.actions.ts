import { CollectionActionTypes } from './collection.action-types';
import { ICollection } from '../../shared/models/Shop';

export interface FetchCollectionsStartAction {
  type: CollectionActionTypes.FETCH_COLLECTIONS_START;
}

export interface FetchCollectionsSuccessAction {
  type: CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: ICollection;
}

export interface FetchCollectionsFailureAction {
  type: CollectionActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload: string | undefined;
}

export type CollectionAction =
  | FetchCollectionsStartAction
  | FetchCollectionsSuccessAction
  | FetchCollectionsFailureAction;
