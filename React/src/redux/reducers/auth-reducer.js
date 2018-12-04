import * as types from '../actions/action_types';

const initialState = {
  userName: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH:
      localStorage.setItem('user', action.userName);
      return (
        Object.assign({}, state, { userName: action.userName })
      );
    case types.SIGN_OUT:
      localStorage.removeItem('user');
      return initialState;
    default:
      return state;
  }
};

export default authReducer;