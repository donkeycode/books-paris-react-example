import React, { Component } from 'react';
import Book from './Book';
import { fetchBooks } from './fetchBook';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: [],
      page: 0
    }
  }
  componentDidMount() {
    fetchBooks(0)
      .then(json => {
        this.setState({ bookList: json.records })
      }
    );
  }
  render() {
    return (
      <div className="card-columns">
        {this.state.bookList.map((book, index) =>
          <Book key={index} classm={index} book={book} />
        )}
      </div>
    );
  }
}
export default BookList;
