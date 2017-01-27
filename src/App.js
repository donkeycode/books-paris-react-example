import React, { Component } from 'react';
import Nav from './Nav';
import './app.css'; // CSS importé automatiquement (webpack)

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          {this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
