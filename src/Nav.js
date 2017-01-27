import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Top 10 des livres les plus empruntés dans les bibliothèques parisienne en 2016</a>
    </nav>
    );
  }
}

export default Nav;
