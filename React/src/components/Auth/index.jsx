import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Auth extends React.Component {
  state = {
    userName: '',
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({ userName: value });
  }

  render() {
    const { userName } = this.state;
    const { auth, authOnKeyPress } = this.props;
    return (
      <section className="Auth">
        <h1 className="Auth__title">Введите свое имя</h1>
        <input
          className="Auth__input"
          type="text"
          onKeyPress={event => authOnKeyPress(event, userName)}
          onChange={this.handleInput}
          value={userName}
        />
        <input
          className="Auth__button"
          type="button"
          onClick={() => auth(userName)}
          value="Ввести"
        />
      </section>
    );
  }
}

Auth.propTypes = {
  auth: PropTypes.func.isRequired,
  authOnKeyPress: PropTypes.func.isRequired,
};

export default Auth;
