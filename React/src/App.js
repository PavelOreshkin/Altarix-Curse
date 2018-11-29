import React, { Component } from 'react';
import './css/bases/bases.scss';
import './css/helpers/variables.scss';
import './css/vendors/reset.css';
import Header from './components/Header';
import MessageArea from './components/MessageArea';
import Footer from './components/Footer';
import Auth from './components/Auth';
import db from './firebase';

class App extends Component {
  state = {
    userName: '',
    messages: [],
  }

  componentDidMount() {
    const messagesRef = db.ref('messages');
    messagesRef.on('value', (snapshot) => {
      const messages = snapshot.val();
      const messageArr = Object.values(messages);
      this.setState({ messages: messageArr });
    });
    this.setState({ userName: localStorage.getItem('user') });
  }

  auth = (event, userName) => {
    event.preventDefault();
    localStorage.setItem('user', userName);
    this.setState({ userName });
  }

  signOut = () => {
    localStorage.removeItem('user');
    this.setState({ userName: '' });
  }

  sendMessage = (newMess) => {
    db.ref(`/messages/${newMess.id}`).set(newMess);
  }

  render() {
    const { messages, userName } = this.state;
    return (
      <div className="App">
        { (!userName)
          ? <Auth auth={this.auth} authOnKeyPress={this.authOnKeyPress} />
          : (
            <div>
              <Header userName={userName} signOut={this.signOut} />
              <MessageArea userName={userName} messages={messages} />
              <Footer userName={userName} sendMessage={this.sendMessage} />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
