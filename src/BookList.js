import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import fetchBook from './fetchBook';
import { selectBook, getBooks } from './dataBook';

class BookList extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   records: [],
    //   page: 0
    // }
  }
  componentDidMount() {
    console.log("load data function");

    this.props.getBooks(); //dispatch(getBooks());

    // fetchBook(0)
    //   .then(json => {
    //     console.log(json);
    //     this.setState({ records: json.records })
    //   }
    // );
  }
  render() {
    return (
      <div className="card-columns">
        {this.props.bookList.map((book, index) =>
          <Book key={index} classm={index} book={book} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { bookList: state.bookList };
}

function mapDispatchToProps(dispatch) {
  return {
    getBooks : () => {
      dispatch(getBooks())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
