import React, { Component } from 'react';
import { fetchBook } from './fetchBook';

class BookDetails extends Component {
  // https://opendata.paris.fr/explore/dataset/les-titres-les-plus-pretes
  // dataset=> les-titres-les-plus-pretes
  // q=> recordid=620e16c7d86250bf9f3353bdb0ec6c2ef3eda527
  constructor(props) {
    super(props);

    this.state = {
      currentBook: null
    }
  }
  componentDidMount() {
    fetchBook(this.props.params.id)
      .then(json => {
        this.setState({ currentBook: json.records[0] })
      }
    );
  }
  render() {
    return(
      <div className="book-detail">
        {this.state.currentBook ? this.state.currentBook.fields.titre : 'loading'}
      </div>
    );
  }
}

export default BookDetails;
