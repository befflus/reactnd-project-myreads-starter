import React, { Component } from 'react'
import Shelf from './shelf';
import { Link } from 'react-router-dom';

export default class MybookPage extends Component {
 
    render() {

      const {allBooks, changeShelf} = this.props
          
    return (
      
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelf shelfName="Currently reading" allBooks={allBooks} shelfValue={'currentlyReading'} changeShelf={changeShelf}></Shelf>
          <Shelf shelfName="Want to read" allBooks={allBooks} shelfValue={'wantToRead'} changeShelf={changeShelf}></Shelf>
          <Shelf shelfName="Read" allBooks={allBooks} shelfValue='read' changeShelf={changeShelf}></Shelf>
          <div className="open-search">
            <Link to="/search"><button className="open-search"></button></Link>
          </div>
      </div>
    )
  }
}
