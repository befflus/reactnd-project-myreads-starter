import React, { Component } from 'react'
import Book from './book';

export default class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
              <ol className="books-grid">
                <Book />
              </ol>
          </div>
      </div>
    )
  }
}