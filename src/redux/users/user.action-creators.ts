import {
  CheckUserSessionAction,
  EmailSignInStartAction,
  GoogleSignInStartAction,
  SetCurrentUserAction,
  SignInFailureAction,
  SignInSuccessAction,
} from './user.actions';
import { SignOutFailureAction, SignOutStartAction, SignOutSuccessAction } from './user.actions';

import { IAuthUser } from '../../shared/models';
import { UserActionType } from './user.action-types';

export const checkUserSession = (): CheckUserSessionAction => {
  return {
    type: UserActionType.CHECK_USER_SESSION,
  };
};

export const emailSignInStart = (email: string, password: string): EmailSignInStartAction => {
  return {
    type: UserActionType.EMAIL_SIGN_IN_START,
    payload: {
      email,
      password,
    },
  };
};

export const googleSignInStart = (): GoogleSignInStartAction => {
  return {
    type: UserActionType.GOOGLE_SIGN_IN_START,
  };
};

export const setCurrentUser = (user: IAuthUser | null): SetCurrentUserAction => {
  return {
    type: UserActionType.SET_CURRENT_USER,
    payload: user,
  };
};

export const signInFailure = (error: string): SignInFailureAction => {
  return {
    type: UserActionType.SIGN_IN_FAILURE,
    payload: error,
  };
};

export const signInSuccess = (user: IAuthUser): SignInSuccessAction => {
  return {
    type: UserActionType.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signOutFailure = (error: string): SignOutFailureAction => {
  return {
    type: UserActionType.SIGN_OUT_FAILURE,
    payload: error,
  };
};

export const signOutStart = (): SignOutStartAction => {
  return {
    type: UserActionType.SIGN_OUT_START,
  };
};

export const signOutSuccess = (): SignOutSuccessAction => {
  return {
    type: UserActionType.SIGN_OUT_SUCCESS,
  };
};
