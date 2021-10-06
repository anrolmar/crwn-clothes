import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase';
import { signInFailure, signInSuccess } from './user.action-creators';

import { EmailSignInStartAction } from './user.actions';
import { UserActionType } from './user.action-types';
import firebase from 'firebase/compat/app';

function* setUserCredentials(user: firebase.User | null) {
  if (user) {
    const userRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = yield call(
      createUserProfileDocument,
      user,
      null,
    );
    const userSnapshot: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> = yield userRef.get();
    yield put(signInSuccess({ uid: userSnapshot.id, ...userSnapshot.data() }));
  } else {
    yield put(signInFailure('User does not exist'));
  }
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

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionType.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
