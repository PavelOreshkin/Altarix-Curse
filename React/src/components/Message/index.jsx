import React from 'react';
import './index.scss';
import icon from '../../img/user.svg';
class Message extends React.Component {
  render() {
    const { message, user, myself } = this.props.message;
    return (
      <article className={(myself) ? "Message Message_myself" : "Message"}>
        <div className="Message__user MessageUser">
          <img src={icon} alt="user" className="MessageUser__icon" />
          {(user) ? <p className="MessageUser__name">{user}</p> : ''}
        </div>
        <div className="Message__text">
          {message}
        </div>
      </article>
    )
  }
}

export default Message;