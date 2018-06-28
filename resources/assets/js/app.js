require('./bootstrap');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Photos from './Photos';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Photos/>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
