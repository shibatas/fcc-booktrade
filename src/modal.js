import React, { Component } from 'react';
import './css/modal.css';

class Modal extends Component {
    render() {
        const show = (this.props.show) ? (' show') : ('');
        if (this.props.data) {
            const data = this.props.data;
            return (
                <div>
                    <div className={'modal-bg' + show} onClick={this.props.toggleModal}>
                    </div>
                    <div className={'modal-card' + show}>
                        <h1>{data.title}</h1>
                        <p>{'Author: ' + data.authors}</p>
                        <p>{data.description}</p>
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