import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import icon from '../../img/check.svg';

class Footer extends React.Component {
  state = {
    message: '',
  }

  handleInput = (event) => {
    const { value } = event.target;
    if (value !== '\n') this.setState({ message: value });
  }

  sendMessage = () => {
    const { message } = this.state;
    const { sendMessage } = this.props;
    if (/\w/.test(message)) {
      const timestamp = Date.now();
      sendMessage({
        id: timestamp,
        message,
        isOutgoing: true,
        user: '',
      });
      this.setState({ message: '' });
    }
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') this.sendMessage();
  }

  render() {
    const { message } = this.state;
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
};
export default Footer;
