import * as types from '../actions/action_types';

const initialState = {
  messages: [],
  message: '',
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MESSAGE_SUCCESS:
      return Object.assign({}, state, { messages: action.messages });
    case types.PREPARATION_MESSAGE:
      return Object.assign({}, state, { message: action.message });
    default:
      return state;
  }
};

export default messageReducer;

// sendMessage = (newMess) => {
//   db.ref(`/messages/${newMess.id}`).set(newMess);
// }

// sendMessage = () => {
//   const { message } = this.state;
//   const { sendMessage, userName } = this.props;
//   if (/\w/.test(message)) {
//     const timestamp = Date.now();
//     sendMessage({
//       id: timestamp,
//       text: message,
//       name: userName,
//     });
//     this.setState({ message: '' });
//   }
// }