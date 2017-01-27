import React, { Component } from 'react';
// import logo from './logo.svg'; // on peut importer toutes images de cette manière
import './App.css'; // CSS importé automatiquement (webpack)
// import Book from './Book';
import Nav from './Nav';

class App extends Component {

  render() {
    return (
      <div className="App">{/* className => class css */}
        <Nav />
        <div className="container">
          {this.props.children }
        </div>
        {/* Aussi - Exemple brut de pomme */}
        {/* <ul> { this.state.records.map( book =>  <li>{book.fields.titre}</li> ) } </ul>*/}
      </div>
    );
  }
}

export default App;
