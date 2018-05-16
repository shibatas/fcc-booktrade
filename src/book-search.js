import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

import Btn1 from './btn1';

class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: null
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    search = (e) => {
        e.preventDefault();
        console.log('search', this.state.value);
        let url = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.value;
        axios.get(url).then(res => {
           let data = res.data.items.map(item => {
              return item.volumeInfo
           });
           this.setState({
               data: data
           });
        });
    }
    render() {
        return (
            <div>
                <form>
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                    <input type='submit' onClick={this.search}/>
                    {(this.state.data) ? (
                        this.state.data.map((item, i) => {
                            if (i < 5) {
                                return (<p><i>{item.title}</i>{' by ' + item.authors[0]}</p>);
                            }
                        })
                    ) : (null)}
                </form>
            </div>
        );
    }
}

//https://www.googleapis.com/books/v1/volumes?q=harry+potter

export default BookSearch;