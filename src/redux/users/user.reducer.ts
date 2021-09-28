import { AuthUser } from '../../shared/types';
import { UserAction } from './user.actions';
import { UserActionType } from './user.action-types';

interface UserState {
  currentUser: AuthUser | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userReducer = (state: UserState = INITIAL_STATE, action: UserAction) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
