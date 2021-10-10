import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import { UserActionType } from '../users/user.action-types';
import { clearCart } from './cart.action-creators';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
