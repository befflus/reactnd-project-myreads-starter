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
              {
              //Filter the books with the shelf value set in the myBookPage component
              //Each element in the array will add a new Book element
              allBooks.filter( book => book.shelf === shelfValue)
              //Map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results
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
    )
  }
}
