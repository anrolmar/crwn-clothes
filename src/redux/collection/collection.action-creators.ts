import { convertCollectionsSnapshotToMap, fireStore } from '../../firebase/firebase';

import { CollectionActionTypes } from './collection.action-types';
import { FetchCollectionItemsAction } from './collection.actions';

export const fetchCollectionItems = async (): Promise<FetchCollectionItemsAction> => {
  const collectionRef = fireStore.collection('collections');
  const snapshot = await collectionRef.get();

  const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  return {
    type: CollectionActionTypes.FETCH_COLLECTION_ITEMS,
    payload: collectionMap,
  };
};
