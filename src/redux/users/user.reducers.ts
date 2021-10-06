import { IAuthUser } from '../../shared/models';
import { UserAction } from './user.actions';
import { UserActionType } from './user.action-types';

interface UserState {
  currentUser: IAuthUser | null;
  errorMessage: string;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  errorMessage: '',
};

const userReducer = (state: UserState = INITIAL_STATE, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: '',
      };

    case UserActionType.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
