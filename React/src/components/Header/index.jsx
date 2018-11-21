import React from 'react';
import './index.scss';

class Header extends React.Component {
  render() {
    const { userName } = this.props;
    return (
      <header className="Header">{userName}</header>
    )
  }
}

export default Header;