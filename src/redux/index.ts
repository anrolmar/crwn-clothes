import { combineReducers } from 'redux';
import { UserAction } from './users/user.actions';
import userReducer from './users/user.reducer';

const reducers = combineReducers({
  users: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
export type Action = UserAction;
