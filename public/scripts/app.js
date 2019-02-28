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

var onFormReset = function onFormReset(e) {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(option);
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
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: onFormReset },
            'Reset options'
        ),
        React.createElement(
            'button',
            {
                disabled: app.options.length === 0,
                onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'ul',
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    option
                );
            })
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
