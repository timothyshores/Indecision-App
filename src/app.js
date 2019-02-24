console.log('Running app.js from src folder');

var template = (
    <div>
        <h1>Timothy</h1>
        <p>To run babel watch compiler run the following command in terminal</p>
        <p>babel src/app.js --output-file=public/scripts/app.js</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(test, appRoot);