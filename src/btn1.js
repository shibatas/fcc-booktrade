import React, { Component } from 'react';
import './css/btn.css';

class Btn1 extends Component {
    render() {
        console.log('btn1', this.props);
        return (
            <button 
                id={this.props.id} 
                className='button-1' 
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    margin: this.props.margin
                }}
                onClick={this.props.handleClick} 
            >{this.props.text}</button>
        );
    }
}

export default Btn1;
