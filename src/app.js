class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    console.log('fetching options');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('saving options');
  }
  componentWillUnmount() {

  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }
  handlePick() {
    const { options } = this.state;
    console.log(options[Math.floor(Math.random() * options.length)])
  }
  handleAddOption(option) {
    if (!option) {
      return 'Please enter a valid option '
    }
    else if (this.state.options.includes(option)) {
      return 'This option was already added'
    }
    this.setState(prevState => ({
      options: [...prevState.options, option]
    }));
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Let a CRUD app make decisions for your real life';
    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = props => {
  return (
    <div>
      {props.title && <h1>{props.title}</h1>}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

const Action = props => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
                </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button
        onClick={e => props.handleDeleteOption(props.optionText)}
      >Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input name="option" type="text" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));