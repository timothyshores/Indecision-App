console.log('Running app.js');

const app = {
    title: 'Indecision App',
    subtitle: 'Let a basic CRUD app make decisions for your life',
    options: ['One', 'Two']
}

const onFormSubmit = e => {
    e.preventDefault();
    const option = e.target.option.value;
    if (option) {
        app.options.push(option)
        e.target.option.value = '';
        renderApp();
    }
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>This app has {app.options.length} items</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <ul>

            </ul>
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();