import React from 'react';

const h1 = <h1>Hello world</h1>;

<p>Hello world</p>;

let myArticle = <article>My Article</article>;

const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

let myDiv = (
    <div>
        <h1>Hello world</h1>
    </div>
);

// a JSX expression must have exactly one outermost element.
// this code will work:

    const paragraphs = (
        <div id="i-am-the-outermost-element">
            <p>I am a paragraph.</p>
            <p>I, too, am a paragraph.</p>
        </div>
    );

// this code will not work:

/*
    const paragraphs = (
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
    );
*/
