import * as types from './action_types';

export const getMessageSuccess = messages => ({
  type: types.GET_MESSAGE_SUCCESS,
  messages,
});

export const prepareMessage = message => ({
  type: types.PREPARATION_MESSAGE,
  message,
});
