'use strict';

console.log('Running app.js');

var app = {
    title: 'Indecision App',
    subtitle: 'Let a basic CRUD app make decisions for your life',
    options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.option.value;
    if (option) {
        app.options.push(option);
        e.target.option.value = '';
        renderApp();
    }
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            'This app has ',
            app.options.length,
            ' items'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement('ul', null)
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
