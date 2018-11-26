import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import icon from '../../img/user.svg';

class Message extends React.Component {
  componentDidMount() {
    const { messageObj } = this.props;
    const { id } = messageObj;
    document.getElementById(`${id}`).scrollIntoView();
  }

  render() {
    const { messageObj } = this.props;
    const {
      message,
      user,
      isOutgoing,
      id,
    } = messageObj;
    return (
      <article className={(isOutgoing) ? 'Message Message_isOutgoing' : 'Message'} id={id}>
        <div className="Message__user MessageUser">
          <img src={icon} alt="user" className="MessageUser__icon" />
          {(user) ? <p className="MessageUser__name">{user}</p> : ''}
        </div>
        <div className="Message__text">
          {message}
        </div>
      </article>
    );
  }
}

Message.propTypes = {
  messageObj: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
    user: PropTypes.string,
    isOutgoing: PropTypes.bool,
  }).isRequired,
};

export default Message;
