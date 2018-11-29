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
    const { auth } = this.props;
    return (
      <section className="Auth">
        <h1 className="Auth__title">Введите свое имя</h1>
        <form className="Auth__form" onSubmit={event => auth(event, userName)}>
          <input
            className="Auth__input"
            type="text"
            onChange={this.handleInput}
            value={userName}
          />
          <input
            className="Auth__button"
            type="submit"
            value="Ввести"
          />
        </form>
      </section>
    );
  }
}

Auth.propTypes = {
  auth: PropTypes.func.isRequired,
  authOnKeyPress: PropTypes.func.isRequired,
};

export default Auth;
