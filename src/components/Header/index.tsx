import React, { Component } from 'react'

import logo from '../../assets/logo.svg'

import './styles.scss'

export default class Header extends Component {
  render = () => (
    <header className="header">
        <div>
            <img src={logo} alt="to.do"/>
        </div>
    </header>
  );
}