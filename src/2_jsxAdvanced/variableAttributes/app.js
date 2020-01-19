import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
let gooseImg = <img src={goose}/>;

ReactDOM.render(gooseImg, document.getElementById('app'));

const myAttr = 'test'; // we can use a variable to set a single attribute value, or multiple of the same attribute value

const myElement = (
    <div>
        <h2 className={myAttr}>A New Heading</h2>
        <h2 className={myAttr}>Another Heading</h2>
        <h2 className={myAttr}>And Another Heading</h2>
    </div>
);

const myAttrObj = {
    attrOne: 'attrOne',
    attrTwo: 'attrTwo',
    attrThree: 'attrThree'
}; // we can use object properties to set multiple attribute values

const myJSXElement = (
    <nav>
        <span id={myAttrObj.attrOne}/>
        <span id={myAttrObj.attrTwo}/>
        <span id={myAttrObj.attrThree}/>
    </nav>
);
