import { call, put, takeLatest } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, fireStore } from '../../firebase/firebase';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.action-creators';

import { ICollection } from '../../shared/models';
import { ShopActionTypes } from './shop.action-types';
import firebase from 'firebase/compat/app';

export function* fetchCollectionsAsync() {
  yield console.log('I am fired');

  try {
    const collectionRef = fireStore.collection('collections');
    const snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = yield collectionRef.get();
    const collectionsMap: ICollection = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error as string));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
