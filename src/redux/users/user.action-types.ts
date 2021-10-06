export enum UserActionType {
  CHECK_USER_SESSION = 'check-user-session',

  EMAIL_SIGN_IN_START = 'email-sign-in-start',
  GOOGLE_SIGN_IN_START = 'google-sign-in-start',

  SET_CURRENT_USER = 'set-current-user',

  SIGN_IN_FAILURE = 'sign-in-failure',
  SIGN_IN_SUCCESS = 'sign-in-success',

  SIGN_UP_FAILURE = 'sign-up-failure',
  SIGN_UP_START = 'sign-up-start',
  SIGN_UP_SUCCESS = 'sign-up-success',

  SIGN_OUT_FAILURE = 'sign-out-failure',
  SIGN_OUT_START = 'sign-out-start',
  SIGN_OUT_SUCCESS = 'sign-out-success',
}
