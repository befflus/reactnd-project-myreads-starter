import React, { Component } from 'react'
import ChangeShelf from './changeshelf'

export default class Book extends Component {
  render() {
    const {book, author, changeShelf} = this.props
    
    //Sets the image for the book. If no image it get set to empty string
    
    const setImage = book.imageLinks ? book.imageLinks.thumbnail : ''
    console.log(book)
    
    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${setImage})` }}></div>
                <ChangeShelf myShelf={book.shelf} changeShelf={changeShelf} book={book}/> 
                </div>
                <div className="book-title">{book.title}</div>

                {/* A book can have several authors. This takes care of that */}
                <div className="book-authors">{author.map( authors => {
                    return <div key={authors}>{authors}</div>
                    })}
                </div>
            </div>
        </li>
    )
  }
}
