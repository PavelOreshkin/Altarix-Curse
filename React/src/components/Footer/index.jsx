import React from 'react';
import './index.scss';
import icon from '../../img/check.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <textarea className="Footer__textarea" />
        <img src={icon} alt="send-button" className="Footer__button" />
      </footer>
    )
  }
}

export default Footer;