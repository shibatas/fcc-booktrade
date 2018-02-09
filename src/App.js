import React, { Component } from 'react';
import './App.css';

// dev
import books from './books';

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
              <div key={i} className='book-card-container'>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;


/*const BooksSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    subject: [String],
    offeredBy: [String]
});
*/