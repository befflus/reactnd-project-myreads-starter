import React, { Component } from 'react'



export default class ChangeShelf extends Component {
  render() {

    const {myShelf, changeShelf, book} = this.props
    
    return (
      <div className="book-shelf-changer">
        <select value={myShelf} onChange={ (event) => changeShelf(book, event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
