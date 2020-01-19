import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

let myList = (
    <ul>
        <li>first</li>
        <li>second</li>
        <li>third</li>
    </ul>
);

// This will add myList to the screen:

ReactDOM.render(myList, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(myList, document.getElementById('app'));
