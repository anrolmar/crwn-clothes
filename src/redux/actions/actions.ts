import { AuthUser } from '../../shared/types';
import { ActionType } from './actions.types';

export interface SetCurrentUserAction {
  type: ActionType.SET_CURRENT_USER;
  payload: AuthUser | null;
}

export type Action = SetCurrentUserAction;
