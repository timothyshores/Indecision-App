let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? "Hide details" : "Show details"}
            </button>
            {visibility && (
                <p>This is a simple challenge to hide and display text</p>
            )}
        </div >
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();