import { CollectionAction } from './collection.actions';
import { CollectionActionTypes } from './collection.action-types';
import { ICollection } from '../../shared/models';

interface CollectionState {
  collections: ICollection;
  isFetching: boolean;
  errorMessage: string | undefined;
}

const INITIALIZE_STATE: CollectionState = { collections: {}, isFetching: false, errorMessage: undefined };

const collectionReducer = (state: CollectionState = INITIALIZE_STATE, action: CollectionAction): CollectionState => {
  switch (action.type) {
    case CollectionActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case CollectionActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default collectionReducer;
