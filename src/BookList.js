import React, { Component } from "react";

import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks });
  };

  filterColors = bookColor => {
    return this.state.filteredBooks.filter(book => bookColor === book.color);
  };

  render() {
    const colorsName = this.props.match.params.colorsName;

    let books = this.state.filteredBooks;
    if (colorsName) {
      books = this.filterColors(colorsName);
    }
    return (
      <div>
        <h3>Books</h3>
        <SearchBar handleFilter={this.filterBooks} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
