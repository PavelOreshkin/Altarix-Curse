import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import icon from '../../img/check.svg';

class Footer extends React.Component {
  state = {
    id: null,
    message: '',
    isOutgoing: true
  }

  handleInput = (event) => {
    const value = event.target.value;
    if (value !== "\n") this.setState({ message: value });
  }

  sendMessage = () => {
    const { message } = this.state;
    if (/\w/.test(message)) {
      const timestamp = Date.now();
      this.setState({ id: timestamp }, () => {
        this.props.sendMessage(this.state);
        this.setState({message: ''});
      });
    }
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') this.sendMessage();
  }

  render() {
    return (
      <footer className="Footer">
        <textarea
          className="Footer__textarea"
          value={this.state.message}
          onChange={(event) => this.handleInput(event)}
          onKeyPress={(event) => this.onKeyPress(event)}
        />
        <img
          src={icon}
          alt="send-button"
          className="Footer__button"
          onClick={this.sendMessage}
          onKeyPress={(event) => this.onKeyPress(event)}
        />
      </footer>
    )
  }
}

Footer.propTypes = {
  sendMessage: PropTypes.func.isRequired
}
export default Footer;
