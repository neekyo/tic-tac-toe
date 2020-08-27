import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: 'ON'
		};
	}

	handleClick = (e) => {
		if (this.state.toggle === 'ON') {
			this.setState({ toggle: 'OFF' });
		} else {
			this.setState({ toggle: 'ON' });
		}
	};

	render() {
		return <button onClick={this.handleClick}>{this.state.toggle}</button>;
	}
}

ReactDOM.render(<Toggle />, document.getElementById('root'));
