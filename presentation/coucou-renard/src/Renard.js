import React, { Component } from 'react';
import cutieFox from './assets/renard.jpg';

import './Renard.css';

class Renard extends Component {
  render() {
    return (
      <div>
          <img className="img-renard" src={cutieFox} alt="Renard" />
          <p>Coucou humain !</p>
      </div>
    );
  }
}

export default Renard;
