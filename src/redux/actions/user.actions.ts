import { ActionType } from '.';
import { AuthUser } from '../../shared/types';
import { SetCurrentUserAction } from './actions';

export const setCurrentUser = (user: AuthUser | null): SetCurrentUserAction => {
  return {
    type: ActionType.SET_CURRENT_USER,
    payload: user,
  };
};
