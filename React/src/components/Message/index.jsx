import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import icon from '../../img/user.svg';

export const Message = ({ messageObj }) => {
  const { message, user, isOutgoing } = messageObj;
  return (
    <article className={(isOutgoing) ? "Message Message_isOutgoing" : "Message"}>
      <div className="Message__user MessageUser">
        <img src={icon} alt="user" className="MessageUser__icon" />
        {(user) ? <p className="MessageUser__name">{user}</p> : ''}
      </div>
      <div className='Message__text'>
        {message}
      </div>
    </article>
  )
}

Message.propTypes = {
  // messageObj: PropTypes.objectOf() string.isRequired
}