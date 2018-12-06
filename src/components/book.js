import React, { Component } from 'react'
import ChangeShelf from './changeshelf'

export default class Book extends Component {
  

  render() {
    const {book, author, changeShelf,haveShelf} = this.props
    
    //Sets the image for the book. If no image it get set to empty string. Search for biography to test this
    
    const setImage = book.imageLinks ? book.imageLinks.thumbnail : '';
   

    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${setImage})` }}></div>
                
                {/* myShelf is the value that is highlighted when user clicks the change shelf button. 
                    If book.shelf exists show this as default value (true on mainpage).
                    When this is false the haveShelf function will check books in the allBooks array and compare the book.id 
                    from the searchresult book. If true it will highlight the current self the book is on. If false 'none' is displayed */}

                <ChangeShelf myShelf={book.shelf ? book.shelf : haveShelf(book)} changeShelf={changeShelf} book={book} /> 
                </div>
                <div className="book-title">{book.title}</div>

                {/* A book can have several authors. This takes care of that. No author returns empty string. Test with poetry as searchword */}
                <div className="book-authors">{ 
                            book.authors ? author.map( (authors) => { 
                           return <div key={authors}>{authors}</div>
                        }) : ''}
                </div>
            </div>
        </li>
    )
  }
}
