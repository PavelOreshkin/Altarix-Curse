import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import icon from '../../img/check.svg';

class Footer extends React.Component {
  handleInput = (event) => {
    const { value } = event.target;
    const { prepareMessage } = this.props;
    if (value !== '\n') prepareMessage(value);
  }

  sendMessage = () => {
    const { sendMessage, userName, message, prepareMessage } = this.props;
    const timestamp = Date.now();
    sendMessage({
      id: timestamp,
      text: message,
      name: userName,
    });
    prepareMessage('');
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') this.sendMessage();
  }

  render() {
    const { message } = this.props;
    return (
      <footer className="Footer">
        <textarea
          className="Footer__textarea"
          value={message}
          onChange={this.handleInput}
          onKeyPress={this.onKeyPress}
        />
        <div
          className="Footer__button"
          onClick={this.sendMessage}
          onKeyPress={this.onKeyPress}
          role="button"
          tabIndex="0"
        >
          <img
            src={icon}
            alt="send-button"
          />
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  prepareMessage: PropTypes.string.isRequired,
  message: PropTypes.string,
};

Footer.defaultProps = {
  message: '',
};

export default Footer;
