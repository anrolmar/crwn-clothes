import { IAuthUser, IUserCredentials } from '../../shared/models';

import { UserActionType } from './user.action-types';

export interface CheckUserSessionAction {
  type: UserActionType.CHECK_USER_SESSION;
}

export interface EmailSignInStartAction {
  type: UserActionType.EMAIL_SIGN_IN_START;
  payload: {
    email: string;
    password: string;
  };
}

export interface GoogleSignInStartAction {
  type: UserActionType.GOOGLE_SIGN_IN_START;
}

export interface SetCurrentUserAction {
  type: UserActionType.SET_CURRENT_USER;
  payload: IAuthUser | null;
}

export interface SignInFailureAction {
  type: UserActionType.SIGN_IN_FAILURE;
  payload: string;
}

export interface SignInSuccessAction {
  type: UserActionType.SIGN_IN_SUCCESS;
  payload: IAuthUser;
}

export interface SignUpFailureAction {
  type: UserActionType.SIGN_UP_FAILURE;
  payload: string;
}

export interface SignUpStartAction {
  type: UserActionType.SIGN_UP_START;
  payload: IUserCredentials;
}

export interface SignUpSuccessAction {
  type: UserActionType.SIGN_UP_SUCCESS;
  payload: {
    user: IAuthUser;
    additionalData: any;
  };
}

export interface SignOutFailureAction {
  type: UserActionType.SIGN_OUT_FAILURE;
  payload: string;
}

export interface SignOutStartAction {
  type: UserActionType.SIGN_OUT_START;
}

export interface SignOutSuccessAction {
  type: UserActionType.SIGN_OUT_SUCCESS;
}

export type UserAction =
  | CheckUserSessionAction
  | EmailSignInStartAction
  | GoogleSignInStartAction
  | SetCurrentUserAction
  | SignInFailureAction
  | SignInSuccessAction
  | SignUpFailureAction
  | SignUpStartAction
  | SignUpSuccessAction
  | SignOutFailureAction
  | SignOutStartAction
  | SignOutSuccessAction;
