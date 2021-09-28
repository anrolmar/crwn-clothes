import { AuthUser } from '../../shared/types';
import { Action, ActionType } from '../actions';

interface UserState {
  currentUser: AuthUser | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userReducer = (state: UserState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
