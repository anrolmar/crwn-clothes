import {
  CollectionAction,
  FetchCollectionsFailureAction,
  FetchCollectionsStartAction,
  FetchCollectionsSuccessAction,
} from './collection.actions';
import { convertCollectionsSnapshotToMap, fireStore } from '../../firebase/firebase';

import { CollectionActionTypes } from './collection.action-types';
import { Dispatch } from 'redux';
import { ICollection } from '../../shared/models/Shop';

export const fetchCollectionsStart = (): FetchCollectionsStartAction => {
  return {
    type: CollectionActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap: ICollection): FetchCollectionsSuccessAction => {
  return {
    type: CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMessage: string): FetchCollectionsFailureAction => {
  return {
    type: CollectionActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch<CollectionAction>) => {
    const collectionRef = fireStore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        return dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error)));
  };
};
