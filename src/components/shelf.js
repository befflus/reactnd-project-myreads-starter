import React, { Component } from 'react'
import Book from './book';

export default class Shelf extends Component {
  render() {

    const {allBooks, shelfName, shelfValue, changeShelf} = this.props

  
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
              <ol className="books-grid">
              
              {/* Filter the books with the book.shelf value set in the myBookPage component and display them at the correct shelf on the page.
                  Each element in the array will add a new Book component with the map() */}
              
              {allBooks.filter( book => book.shelf === shelfValue)             
                .map(book => (
                  <Book book={book}
                  key={book.id}
                  author={book.authors}
                  changeShelf={changeShelf}
                  />
                ))}                              
              </ol>
          </div>
      </div>
    )}
}
