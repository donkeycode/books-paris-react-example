import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from './dataBook';

class BookDetails extends Component {
  // https://opendata.paris.fr/explore/dataset/les-titres-les-plus-pretes
  // dataset=> les-titres-les-plus-pretes
  // q=> recordid=620e16c7d86250bf9f3353bdb0ec6c2ef3eda527
  componentDidMount() {
    this.props.dispatch(getBook(this.props.params.id));
  }
  render() {
    return(
      <div className="book-detail">
        {this.props.currentBook ? this.props.currentBook.fields.titre : 'loading'}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentBook: state.currentBook };
}

export default connect(mapStateToProps)(BookDetails);
