import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

import Btn1 from './btn1';

class BookCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
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
                data: res.data.volumeInfo,
                image: res.data.volumeInfo.imageLinks.small
            });
        });
    }
    handleClick = (e) => {
        console.log('handle click', e.target.id);
        this.props.toggleModal();
        this.props.sendToModal(this.state.data);
    }
    render() {
        return (
            <div className='book-card-container' >
                <img 
                    className='book-image' 
                    src={this.state.image} 
                    width='200px' 
                    alt='Cover image not available'
                />
                <div className='book-info'>
                    <div style={{width: '70%', height: '70px'}} onClick={this.handleClick}>
                        <Btn1 id='book-info' text='View Details' width='100%' height='100%' onClick={this.handleClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCard;