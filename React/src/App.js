import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './css/bases/bases.scss';
import './css/helpers/variables.scss';
import './css/vendors/reset.css';
import Header from './components/Header';
import MessageArea from './components/MessageArea';
import Footer from './components/Footer';
import Auth from './components/Auth';
import db from './firebase';
import { getMessageSuccess, prepareMessage } from './redux/actions/message-actions';
import { auth, signOut } from './redux/actions/auth-actions';

class App extends Component {
  componentDidMount() {
    const { getMessage, setAuth } = this.props;
    const messagesRef = db.ref('messages');
    messagesRef.on('value', (snapshot) => {
      const messages = snapshot.val();
      const messageArr = Object.values(messages);
      getMessage(messageArr);
    });
    setAuth(localStorage.getItem('user'));
  }

  auth = (event, userName) => {
    event.preventDefault();
    const { setAuth } = this.props;
    setAuth(userName);
  }

  sendMessage = (newMess) => {
    db.ref(`/messages/${newMess.id}`).set(newMess);
  }

  render() {
    const {
      messages,
      message,
      userName,
      signOut,
      prepareMessage,      
    } = this.props;
    return (
      <div className="App">
        { (!userName)
          ? <Auth auth={this.auth} authOnKeyPress={this.authOnKeyPress} />
          : (
            <div>
              <Header
                userName={userName}
                signOut={signOut}
              />
              <MessageArea
                userName={userName}
                messages={messages}
                message={message}
              />
              <Footer
                userName={userName}
                sendMessage={this.sendMessage}
                prepareMessage={prepareMessage}
                message={message}
              />
            </div>
          )
        }
      </div>
    );
  }
}

App.propTypes = {
  getMessage: PropTypes.func.isRequired,
  setAuth: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  prepareMessage: PropTypes.func.isRequired,
  userName: PropTypes.string,
  message: PropTypes.string,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      name: PropTypes.string,
      isOutgoing: PropTypes.bool,
    }),
  ),

};

App.defaultProps = {
  messages: [],
  userName: '',
  message: '',
};

const mapStateToProps = state => ({
  messages: state.messageState.messages,
  message: state.messageState.message,
  userName: state.authState.userName,
});

const mapDispatchToProps = dispatch => ({
  getMessage: messages => dispatch(getMessageSuccess(messages)),
  setAuth: userName => dispatch(auth(userName)),
  signOut: () => dispatch(signOut()),
  prepareMessage: message => dispatch(prepareMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
