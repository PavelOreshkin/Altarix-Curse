import * as types from './action_types';

export const auth = userName => ({
  type: types.SET_AUTH,
  userName,
});

export const signOut = () => ({
  type: types.SIGN_OUT,
});
