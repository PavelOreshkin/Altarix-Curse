import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Message from '../Message';
import Preloader from '../Preloader';

const MessageArea = ({ messages, userName }) => (
  <section className="MessageArea">
    <ul>
      {(messages.length !== 0)
        ? messages.map(item => (<li key={item.id}><Message messageObj={item} userName={userName} /></li>))
        : <Preloader />}
    </ul>
  </section>
);

MessageArea.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      name: PropTypes.string,
      isOutgoing: PropTypes.bool,
    }),
  ),
  userName: PropTypes.string.isRequired,
};

MessageArea.defaultProps = {
  messages: [],
};

export default MessageArea;
