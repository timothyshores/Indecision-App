'use strict';

console.log('Running app.js from src folder');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Timothy'
    ),
    React.createElement(
        'p',
        null,
        'To run babel watch compiler run the following command in terminal'
    ),
    React.createElement(
        'p',
        null,
        'babel src/app.js --output-file=public/scripts/app.js'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(test, appRoot);
