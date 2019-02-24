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
        'babel src/app.js --out-file=public/scripts/app.js --preset --presets=env,react --watch'
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

var user = {
    name: 'Timothy Shores',
    age: 30,
    city: 'Chicago, IL'

    // var name = 'Timothy Shores';
    // var age = 30;
    // var city = 'Chicago'

};var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        user.age,
        ' years old'
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.city
    )
);

ReactDOM.render(templateTwo, document.getElementById('app'));
