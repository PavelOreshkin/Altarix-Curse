import React, { Component } from 'react';
import './css/bases/bases.scss';
import './css/helpers/variables.scss';
import './css/vendors/reset.css';
import Header from './components/Header';
import MessageArea from './components/MessageArea';
import Footer from './components/Footer';
import Auth from './components/Auth';

class App extends Component {
  state = {
    userName: '',
    messages: [
      {
        id: 1,
        user: 'Пётр Петров',
        message: 'Привет, как дела?',
        isOutgoing: false,
      },
      {
        id: 2,
        user: '',
        message: 'Всё отлично, у тебя?',
        isOutgoing: true,
      },
      {
        id: 3,
        user: 'Пётр Петров',
        message: 'Я съел собаку',
        isOutgoing: false,
      },
      {
        id: 4,
        user: '',
        message: 'Эмм... я звоню в полицию',
        isOutgoing: true,
      },
      {
        id: 5,
        user: 'Пётр Петров',
        message: 'Пример большого сообщения пример большого сообщения пример большого сообщения пример большого',
        isOutgoing: false,
      },
    ],
  }

  auth = userName => this.setState({ userName });

  authOnKeyPress = (event, userName) => {
    if (event.key === 'Enter') this.auth(userName);
  }

  sendMessage = (newMess) => {
    const { messages } = this.state;
    const newMessArr = [...messages, newMess];
    this.setState({ messages: newMessArr });
  }

  render() {
    const { messages, userName } = this.state;
    return (
      <div className="App">
        { (!userName)
          ? <Auth auth={this.auth} authOnKeyPress={this.authOnKeyPress} />
          : (
            <div>
              <Header userName={userName} />
              <MessageArea messages={messages} />
              <Footer sendMessage={this.sendMessage} />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
