import React, { Component } from 'react';
import './css/App.css';

import AddBook from './add-book';
import BookCard from './book-card';
import BookDetail from './book-detail';

// dev
import books from './books';
// eventually, hide api url in .env file
const apiurl = 'https://www.googleapis.com/books/v1/volumes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetail: false,
      addBook: false,
      bookInfo: null
    }
  }
  addBook = () => {
    console.log('add book');
    this.toggleModal('addBook');
  }
  toggleModal = (id) => {
    console.log('toggle modal:', id);
    switch (id) {
      case 'bookDetail':
        this.setState({
          bookDetail: !this.state.bookDetail
        });
        break;
      case 'addBook':
        this.setState({
          addBook: !this.state.addBook
        });
        break;
      default:
    }
  }
  updateModalContents = (data) => {
    this.setState({
      bookInfo: data
    })
  }
  render() {

    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Book Trade</h1>
          <ul className="nav">
            <li onClick={this.addBook}>Add a book</li>
            <li>Login</li>
          </ul>
        </header>
        <div className='book-shelf-container'>
          {books.map((item, i) => {
            return (
              <BookCard key={i} {...item} toggleModal={this.toggleModal} sendToModal={this.updateModalContents}/>
            );
          })}
        </div>
        <AddBook show={this.state.addBook} toggleModal={this.toggleModal}/>
        <BookDetail show={this.state.bookDetail} data={this.state.bookInfo} toggleModal={this.toggleModal}/>
      </div>
    );
  }
}

export default App;