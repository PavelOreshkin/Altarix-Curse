import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Auth extends React.Component {
  state = {
    user: '',
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({ user: value });
  }

  render() {
    const { user } = this.state;
    const { auth, userName } = this.props;
    return (
      <section className="Auth">
        <h1 className="Auth__title">Введите свое имя</h1>
        <form className="Auth__form" onSubmit={event => auth(event, user)}>
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
  userName: PropTypes.string.isRequired,
};

export default Auth;
