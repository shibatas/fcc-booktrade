import React, { Component } from 'react';
import './css/App.css';

import BookCard from './book-card';
import Modal from './modal';

// dev
import books from './books';
// eventually, hide api url in .env file
const apiurl = 'https://www.googleapis.com/books/v1/volumes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      bookInfo: null
    }
  }
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  updateModalContents = (data) => {
    console.log('modal data', data);
    this.setState({
      bookInfo: data
    })
  }
  render() {

    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Swap-a-Book!</h1>
        </header>
        <div className='book-shelf-container'>
          {books.map((item, i) => {
            return (
              <BookCard key={i} {...item} toggleModal={this.toggleModal} sendToModal={this.updateModalContents}/>
            );
          })}
        </div>
        <Modal show={this.state.modal} data={this.state.bookInfo} toggleModal={this.toggleModal}/>
      </div>
    );
  }
}

export default App;