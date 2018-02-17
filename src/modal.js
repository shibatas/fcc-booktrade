import React, { Component } from 'react';
import './css/modal.css';

import Btn1 from './btn1';

class Modal extends Component {
    handleClick = (e) => {
        console.log('handle Click', e.target.id);
    }
    render() {
        const show = (this.props.show) ? (' show') : ('');
        if (this.props.data) {
            const data = this.props.data;
            let description = data.description;
            if (description.length > 500) {
                description = description.split(' ').slice(0,100).join(' ').concat(' ...');
            }
            return (
                <div>
                    <div className={'modal-bg' + show} onClick={this.props.toggleModal}>
                    </div>
                    <div className={'modal-card' + show}>
                        <h1>{data.title}</h1>
                        <div className='modal-book-details'>
                            <p>{'Author: ' + data.authors}</p>
                            <p>{'Categories: ' + data.categories}</p>
                            <p>{description}</p>
                            <p>See more info at <a href={data.infoLink} target='_blank'>Google Play Store</a></p>
                        </div>
                        <div className='modal-btns'>
                            <Btn1 id='view-offers' text='3 Copies Available' width='200px' height='50px' margin='20px' onClick={this.handleClick}/>
                            <Btn1 id='make-offer' text='Offer My Copy' width='200px' height='50px' margin='20px' onClick={this.handleClick}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className={'modal-bg' + show} onClick={this.props.toggleModal}>
                    </div>
                    <div className={'modal-card' + show}>
                        <h1>No Data</h1>
                    </div>
                </div>
            );
        }
    }
}

export default Modal;