import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/searchpage';
import MybookPage from './components/mybookpage';
import { Route } from 'react-router-dom';



class BooksApp extends React.Component {

  state= {
    allBooks: []  //Array containing all books
  }

  
  componentDidMount(){
    this.setBookArray();
    console.log('componentDidMount done');
    }

  setBookArray () {
    BooksAPI.getAll().then(books => {
      this.setState({allBooks: books});
    });
  }

  //Function for changing shelf for a book
 changeShelf = (book, shelf) => {
   BooksAPI.update(book, shelf).then(() => {
     this.setBookArray();
     })
  }
 
  haveShelf = (book) => {

    this.state.allBooks.filter(allbooks => {
      if (allbooks.id === book.id) {
      book.shelf = allbooks.shelf
      console.log(book.shelf)
      return book.shelf
    } else  
      { 
      if(!book.shelf){
        book.shelf = 'none'
        }
    } return book.shelf
  })
}  
  
    
    

 render() {
    return (
      <div>
        <
          Route exact path="/" 
            render= { () => (
              <MybookPage allBooks={this.state.allBooks} changeShelf={this.changeShelf} />                    
            )}
        >
        </Route> 
             
        <
          Route exact path="/search" 
            render= { () => (
              <SearchPage  changeShelf={this.changeShelf} allBooks={this.state.allBooks} haveShelf={this.haveShelf}/>
            )}
        >            
        </Route>
      </div>
    )
  }
}

export default BooksApp
