import React, { Component } from 'react';
import Nav from './Nav';

class App extends Component {

  render() {
    return (
      <div className="App">{/* className => class css */}
        <Nav />{/* Appel d'un component */}
        <div className="container">
          {this.props.children } {/* Point d'entrée du router */}
        </div>
        {/* Aussi - Exemple brut de pomme */}
        {/* <ul> { this.state.records.map( book =>  <li>{book.fields.titre}</li> ) } </ul>*/}
      </div>
    );
  }
}

export default App;
