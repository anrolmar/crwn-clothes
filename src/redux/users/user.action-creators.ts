import { IAuthUser } from '../../shared/types';
import { SetCurrentUserAction } from './user.actions';
import { UserActionType } from './user.action-types';

export const setCurrentUser = (user: IAuthUser | null): SetCurrentUserAction => {
  return {
    type: UserActionType.SET_CURRENT_USER,
    payload: user,
  };
};
