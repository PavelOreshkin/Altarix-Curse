import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export const Header = ({ userName }) => <header className="Header">{userName}</header>;

Header.propTypes = {
  userName: PropTypes.string.isRequired
}