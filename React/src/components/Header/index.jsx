import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import icon from '../../img/sign-out.svg';

const Header = ({ userName, signOut }) => (
  <header className="Header">
    <div
      onClick={signOut}
      onKeyPress={signOut}
      role="button"
      tabIndex={0}
      className="Header__button"
    >
      <img
        src={icon}
        alt="sing-out"
        className="Header__icon"
      />
    </div>
    {userName}
  </header>
);

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Header;
