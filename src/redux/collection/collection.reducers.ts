import { CollectionAction } from './collection.actions';
import { CollectionActionTypes } from './collection.action-types';
import { ICollection } from '../../shared/models';

interface CollectionState {
  collections: ICollection[];
}

const INITIALIZE_STATE: CollectionState = { collections: [] };

const collectionReducer = (state: CollectionState = INITIALIZE_STATE, action: CollectionAction): CollectionState => {
  switch (action.type) {
    case CollectionActionTypes.FETCH_COLLECTION_ITEMS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default collectionReducer;
