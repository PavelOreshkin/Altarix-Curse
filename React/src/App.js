import React, { Component } from 'react';
import './css/bases/bases.scss';
import './css/helpers/variables.scss';
import './css/vendors/reset.css';
import Header from './components/Header';
import MessageArea from './components/MessageArea';
import { messages } from './constants';
import Footer from './components/Footer';

class App extends Component {
  // messages
  render() {
    return (
      <div className="App">
        <Header userName="Иванов Иван"/>
        <MessageArea messages={messages} />
        <Footer />        
      </div>
    );
  }
}

export default App;
