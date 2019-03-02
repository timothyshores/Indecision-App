class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }
    handleVisibility() {
        this.setState(prevState => {
            return {
                visible: !prevState.visible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility} >{this.state.visible ? "Hide details" : "Show details"}</button>
                {this.state.visible && (
                    <p>This is a simple challenge to hide and display text</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
