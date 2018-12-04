import * as types from './action_types';
import db from '../../firebase';

export const getMessageSuccess = messages => ({
  type: types.GET_MESSAGE_SUCCESS,
  messages,
});

export const prepareMessage = message => ({
  type: types.PREPARATION_MESSAGE,
  message,
});

// export const sendMessage = message => ({
//   type: types.SEND_MESSAGE,
//   message,
// });

export const sendMessage = (message, userName) => {
  if (/\w/.test(message)) {
    const newMess = {
      id: Date.now(),
      text: message,
      name: userName,
    };
    db.ref(`/messages/${newMess.id}`).set(newMess);
  }
};

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