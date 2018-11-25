import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Message } from '../Message';

export const MessageArea = ({ messages }) => (  
  <section className="MessageArea">
    <ul>
      {messages.map(item => <li key={item.id}><Message messageObj={item} /></li>)}
    </ul>
  </section>
)

MessageArea.propTypes = {
  // messageObj: PropTypes.objectOf() string.isRequired
}