console.log('Running app.js from src folder');

var template = (
    <div>
        <h1>Timothy</h1>
        <p>To run babel watch compiler run the following command in terminal</p>
        <p>babel src/app.js --out-file=public/scripts/app.js --preset --presets=env,react --watch</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);

var user = {
    name: 'Timothy Shores',
    age: 30,
    city: 'Chicago'
}

var name = 'Timothy Shores';
var age = 30;
var city = 'Chicago'

var templateTwo = (
    <div>
        <h1>{name}</h1>
        <p>{age} years old</p>
        <p>Location: {city}</p>
    </div>
);

ReactDOM.render(templateTwo, document.getElementById('app'));