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

const onFormReset = e => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <br />
            <button onClick={onFormReset}>Reset options</button>
            <button
                disabled={app.options.length === 0}
                onClick={onMakeDecision}>
                What should I do?
            </button>
            <ul>
                {app.options.map((option, index) => { return <li key={index}>{option}</li> })}
            </ul>
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();