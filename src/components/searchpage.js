import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Book from './book';
import * as BooksAPI from '../BooksAPI';

export default class SearchPage extends Component {

  state = {
    searchQuery: '',
    searchResult: []
  }

  //Updates the search input field as the user types

  searchQueryInput = (query) => {
    this.setState({searchQuery: query})
    // Then displays searchresults on the page according to what the bookQuery value is
    this.setSearchResult(query);
  }

  setSearchResult = (query) => {
    // When we have a query start searching for books 
    if (query) {
      BooksAPI.search(query.trim()).then((searchResult) => {
          // If we have a error set the array to empty
          if (searchResult.error) {
              this.setState({ searchResult: [] });
          } else {
              //If everything is OK add the search result into the array
              this.setState({ searchResult })
              
              
          }
      })
  } else {
      //When we have no query set the value to an empty array
      this.setState({ searchResult: [] })
  }
  
}
  render() {

    const {allBooks, changeShelf, haveShelf} = this.props


return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search"></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                value={this.state.searchQuery}
                onChange={ (event) => this.searchQueryInput(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchResult.map( matchedBook => (
                  <div key={matchedBook.id}>
                    <Book 
                    book={matchedBook}
                    key={matchedBook.id}
                    author={matchedBook.authors}
                    changeShelf={changeShelf}
                    allBooks={allBooks}
                    haveShelf={haveShelf}
                     />
                  </div>
                ))}
              </ol>
            </div>
          </div>
    )
  }
}
