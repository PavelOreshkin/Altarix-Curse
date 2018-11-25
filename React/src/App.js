import React, { Component } from 'react';
import './css/bases/bases.scss';
import './css/helpers/variables.scss';
import './css/vendors/reset.css';
import { Header } from './components/Header';
import { MessageArea } from './components/MessageArea';
import Footer from './components/Footer';
// TODO PropTypes
// TODO eslint

class App extends Component {  
  state = {
    messages: [
    {
      id: 1,
      user: "Пётр Петров",
      message: "Привет, как дела?",
      isOutgoing: false,
    },
    {
      id: 2,
      message: "Всё отлично, у тебя?",
      isOutgoing: true,
    },
    {
      id: 3,
      user: "Пётр Петров",
      message: "Я съел собаку",
      isOutgoing: false,
    },
    {
      id: 4,
      message: "Эмм... я звоню в полицию",
      isOutgoing: true,
    },
    {
      id: 5,
      user: "Пётр Петров",
      message: "Пример большого сообщения пример большого сообщения пример большого сообщения пример большого сообщения пример большого сообщения",
      isOutgoing: false,
    }
  ]
}

  sendMessage = (newMess) => {
    const { messages } = this.state;
    const newMessArr = [...messages, newMess];
    this.setState({messages: newMessArr});
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <Header userName="Иванов Иван"/>
        <MessageArea messages={messages} />
        <Footer sendMessage={this.sendMessage} />        
      </div>
    );
  }
}

export default App;
