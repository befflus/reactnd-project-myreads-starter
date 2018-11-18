import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/searchpage';
import MybookPage from './components/mybookpage';
import { Route } from 'react-router-dom';



class BooksApp extends React.Component {

  render() {
    return (
      <div>
        <
          Route exact path="/" 
            render= { () => (
              <MybookPage />                    
            )}
        >
        </Route> 
             
        <
          Route exact path="/search" 
            render= { () => (
              <SearchPage />
            )}
        >            
        </Route>
      </div>
    )
  }
}

export default BooksApp
