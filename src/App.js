import React, { Component } from 'react';
import './App.css';

import BookCard from './book-card';

// dev
import books from './books';
// eventually, hide api url in .env file
const apiurl = 'https://www.googleapis.com/books/v1/volumes';

class App extends Component {
  render() {

    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Swap-a-Book!</h1>
        </header>
        <div className='book-shelf-container'>
          {books.map((item, i) => {
            return (
              <BookCard key={i} {...item}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;