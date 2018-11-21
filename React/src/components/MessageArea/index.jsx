import React from 'react';
import './index.scss';
import Message from '../Message';

class MessageArea extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <section className="MessageArea">
        <ul>
          {messages.map(item => <li><Message message={item} /></li>)}
        </ul>
      </section>
    )
  }
}

export default MessageArea;