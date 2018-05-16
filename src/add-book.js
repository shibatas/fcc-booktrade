import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

import Btn1 from './btn1';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    toggleModal = () => {
        this.props.toggleModal('addBook');
    }
    render() {
        const show = (this.props.show) ? (' show') : ('');
        console.log('show add book', show);
        return (
            <div>
                <div className={'modal-bg' + show} onClick={this.toggleModal}>
                </div>
                <div className={'modal-card' + show}>
                    <h1>Add a book</h1>
                    <p>Search</p>
                </div>
            </div>
        );
    }
}

export default AddBook;