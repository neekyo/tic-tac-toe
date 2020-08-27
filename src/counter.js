import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	handleClick = (e) => {
		if (this.state.counter >= 0) {
			this.setState({ counter: this.state.counter + 1 });
		}
	};

	render() {
		return (
			<div id="mainArea">
				<p>
					button count: <span>{this.state.counter}</span>
				</p>
				<button id="mainButton" onClick={this.handleClick}>
					Increase
				</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('root'));
