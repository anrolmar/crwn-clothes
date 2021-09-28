import { AuthUser } from '../../shared/types';
import { UserActionType } from './user.action-types';

export interface SetCurrentUserAction {
  type: UserActionType.SET_CURRENT_USER;
  payload: AuthUser | null;
}

export type UserAction = SetCurrentUserAction;
