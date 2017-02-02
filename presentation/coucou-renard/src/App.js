import React, { Component } from 'react';
import './App.css';
import Renard from './Renard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Coucou Renard !</h2>
        </div>
        <Renard />
        <p className="App-intro">
          L'application se lance, nous sommes contents.
        </p>
      </div>
    );
  }
}

export default App;
