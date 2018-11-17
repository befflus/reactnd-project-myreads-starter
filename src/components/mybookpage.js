import React, { Component } from 'react'
import Shelf from './shelf';


export default class MybookPage extends Component {
  render() {
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          <Shelf></Shelf>  
          <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
    )
  }
}
