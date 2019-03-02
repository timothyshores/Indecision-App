class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Let a CRUD app make decisions for your real life';
        const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>You currently have {this.props.options.length} number of options</p>
                {this.props.options.map(option => <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}



class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>Placeholder: Add a new option here</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));