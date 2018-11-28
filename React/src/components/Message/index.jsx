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
    const { messageObj, userName } = this.props;
    const {
      text,
      name,
      id,
    } = messageObj;
    return (
      <article className={(userName === name) ? 'Message Message_isOutgoing' : 'Message'} id={id}>
        <div className="Message__user MessageUser">
          <img src={icon} alt="user" className="MessageUser__icon" />
          <p className="MessageUser__name">{name}</p>
        </div>
        <div className="Message__text">
          {text}
        </div>
      </article>
    );
  }
}

Message.propTypes = {
  messageObj: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    name: PropTypes.string,
    isOutgoing: PropTypes.bool,
  }).isRequired,
  userName: PropTypes.string.isRequired,
};

export default Message;
