import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg'; // on peut importer toutes images, CSS de cette manière
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to={`/`}>
        <img src={logo} alt="logo" />
        Top 10 des livres les plus empruntés dans les bibliothèques parisienne en 2016
      </Link>
    </nav>
    );
  }
}

export default Nav;
