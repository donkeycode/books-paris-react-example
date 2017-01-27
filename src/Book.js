import React, { Component } from 'react';
import { Link } from 'react-router';

class Book extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title"> #{this.props.classm + 1} : { this.props.book.fields.titre }</h4>
          <h6 className="card-subtitle mb-1 text-muted">{ this.props.book.fields.support }</h6>
          <p className="card-text">Nombre d'emprunt : { this.props.book.fields.nombre_de_prets }</p>
          <div className="card-block">
            <Link className="card-link" to={`/books/${this.props.book.recordid}`}>Plus de détails</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;

// export default function (props) {
//   return (
//     <div className="Book">
//       { props.book.fields.titre }
//     </div>
//   );
// };
