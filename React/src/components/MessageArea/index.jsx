import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Message from '../Message';

const MessageArea = ({ messages }) => (
  <section className="MessageArea">
    <ul>
      {messages.map(item => <li key={item.id}><Message messageObj={item} /></li>)}
    </ul>
  </section>
);

MessageArea.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
      user: PropTypes.string,
      isOutgoing: PropTypes.bool,
    }),
  ),
};

MessageArea.defaultProps = {
  messages: [],
};

export default MessageArea;
