import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
let math =<h1>2 + 3 = 2 + 3</h1>;

ReactDOM.render(math, document.getElementById('app'));

// use curly brackets {} to inject JS
let math =<h1>2 + 3 = {2 + 3}</h1>;

ReactDOM.render(math, document.getElementById('app'));

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));
