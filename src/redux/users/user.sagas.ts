import { EmailSignInStartAction, SignUpStartAction, SignUpSuccessAction } from './user.actions';
import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from '../../firebase/firebase';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './user.action-creators';

import { UserActionType } from './user.action-types';
import firebase from 'firebase/compat/app';

function* isUserAuthenticated() {
  try {
    const userAuth: firebase.User = yield getCurrentUser();
    if (!userAuth) return;
    yield setUserCredentials(userAuth);
  } catch (error) {
    yield put(signInFailure(error as string));
  }
}

function* setUserCredentials(user: firebase.User | null, additionalData?: any) {
  if (user) {
    const userRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = yield call(
      createUserProfileDocument,
      user,
      additionalData,
    );
    const userSnapshot: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> = yield userRef.get();
    yield put(signInSuccess({ uid: userSnapshot.id, ...userSnapshot.data() }));
  } else {
    yield put(signInFailure('User does not exist'));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }: SignUpSuccessAction) {
  yield setUserCredentials(user as firebase.User, additionalData);
}

function* signInWithGoogle() {
  try {
    const { user }: firebase.auth.UserCredential = yield auth.signInWithPopup(googleProvider);
    yield setUserCredentials(user);
  } catch (error) {
    yield put(signInFailure(error as string));
  }
}

function* signInWithEmail({ payload: { email, password } }: EmailSignInStartAction) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield setUserCredentials(user);
  } catch (error) {
    yield put(signInFailure(error as string));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error as string));
  }
}

function* signUp({ payload: { email, password, displayName } }: SignUpStartAction) {
  try {
    const { user }: firebase.auth.UserCredential = yield auth.createUserWithEmailAndPassword(email, password);
    if (user) {
      yield put(signUpSuccess(user, { displayName }));
    } else {
      yield put(signUpFailure('There was a problem creating the user'));
    }
  } catch (error) {
    yield put(signUpFailure(error as string));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionType.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionType.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionType.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionType.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onGoogleSignInStart),
    call(onSignOutStart),
    call(onSignUpSuccess),
    call(onSignUpStart),
  ]);
}
