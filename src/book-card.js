import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

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
                    <div className='book-info-item' onClick={this.handleClick} >
                        <p style={{lineHeight:'50px'}}>See Info</p>
                    </div>
                    {/*<div className='book-info-item'onClick={this.handleClick} >
                    <p style={{lineHeight:'50px'}}>Make an Offer</p>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default BookCard;