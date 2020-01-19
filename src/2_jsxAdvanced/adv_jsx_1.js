import React from 'react';
import ReactDOM from 'react-dom';

// class is reserved word in JS. So use className instead.
let myDiv = <div className="big">I AM A BIG DIV</div>;
ReactDOM.render(myDiv, document.getElementById('app'));

// while in HTML it's allowed to add closing tag to single tag element ->
// in JSX it's required to add backslash
const profile = (
    <div>
        <h1>I AM JENKINS</h1>
        <img src="images/jenkins.png" />
        <article>
            I LIKE TO SIT
            <br>
                JENKINS IS MY NAME
            </br>
            THANKS HA LOT
        </article>
    </div>
);
