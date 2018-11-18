import React, { Component } from 'react'
import Shelf from './shelf';
import { Link } from 'react-router-dom';


export default class MybookPage extends Component {
  render() {
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          <Shelf></Shelf>  
          <div className="open-search">
              <Link to="/search"><button className="open-search"></button></Link>
            </div>
          </div>
    )
  }
}
