import React from 'react';
import ReactDOM from 'react-dom';

function DataList({ data }) {
	let info = data.map((person) => {
		return (
			<ul>
				<span>{person.name}</span> <span>{person.age}</span>
			</ul>
		);
	});
	return <div>{info}</div>;
}

const data = [ { name: 'Daniel', age: 25 }, { name: 'John', age: 24 }, { name: 'Jen', age: 31 } ];

ReactDOM.render(<DataList data={data} />, document.getElementById('root'));
