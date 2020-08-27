class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			name: ''
		};
	}

	nameChange(name) {
		this.setState({ name });
	}

	render() {
		return (
			<div>
				<Header name={this.state.name} />
				<NameInput nameChange={this.nameChange.bind(this)} />
			</div>
		);
	}
}

const Header = (props) => {
	return <h3>Hello, {props.name || 'visitor'}</h3>;
};

class NameInput extends React.Component {
	constructor() {
		super();
		this.state = {
			userInput: ''
		};
	}

	handleChange(e) {
		const name = e.target.value;
		this.setState({ userInput: name });
		this.props.nameChange(name);
	}

	clearText(e) {
		this.props.nameChange('');
		this.setState({ userInput: '' });
	}

	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Type your name here"
					value={this.state.userInput}
					onChange={this.handleChange.bind(this)}
				/>
				<div>
					<button onClick={this.clearText.bind(this)}>Clear</button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Layout />, document.getElementById('app'));
