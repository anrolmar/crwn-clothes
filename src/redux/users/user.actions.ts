import { IAuthUser } from '../../shared/models';
import { UserActionType } from './user.action-types';

export interface SetCurrentUserAction {
  type: UserActionType.SET_CURRENT_USER;
  payload: IAuthUser | null;
}

export type UserAction = SetCurrentUserAction;
