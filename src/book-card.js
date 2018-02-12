import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class BookCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }
    componentDidMount() {
        this.getBook();
    }
    getBook = () => {
        console.log('this.props', this.props);
        const url = `https://www.googleapis.com/books/v1/volumes/${this.props.googleId}`
        axios.get(url)
        .then(res => {
            console.log('get book', res);
            this.setState({
                image: res.data.volumeInfo.imageLinks.small
            });
        });
    }
    render() {
        return (
            <div className='book-card-container' style={{height: 'auto'}}>
                <img 
                    className='book-image' 
                    src={this.state.image} 
                    width='200px' 
                    alt='Cover image not available'
                />
                <div className='book-info'>
                    <div className='book-info-item'>
                        <p style={{lineHeight:'50px'}}>Book Info</p>
                    </div>
                    <div className='book-info-item'>
                    <p style={{lineHeight:'50px'}}>Make an Offer</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCard;