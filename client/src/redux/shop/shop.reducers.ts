import { ICollection } from '../../shared/models';
import { ShopAction } from './shop.actions';
import { ShopActionTypes } from './shop.action-types';

interface CollectionState {
  collections: ICollection;
  isFetching: boolean;
  errorMessage: string | undefined;
}

const INITIALIZE_STATE: CollectionState = { collections: {}, isFetching: false, errorMessage: undefined };

const collectionReducer = (state: CollectionState = INITIALIZE_STATE, action: ShopAction): CollectionState => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
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
