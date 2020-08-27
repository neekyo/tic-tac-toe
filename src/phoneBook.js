import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
	table: {
		borderCollapse: 'collapse'
	},
	tableCell: {
		border: '1px solid gray',
		margin: 0,
		padding: '5px 10px',
		width: 'max-content',
		minWidth: '150px'
	},
	form: {
		container: {
			padding: '20px',
			border: '1px solid #F0F8FF',
			borderRadius: '15px',
			width: 'max-content',
			marginBottom: '40px'
		},
		inputs: {
			marginBottom: '5px'
		},
		submitBtn: {
			marginTop: '10px',
			padding: '10px 15px',
			border: 'none',
			backgroundColor: 'lightseagreen',
			fontSize: '14px',
			borderRadius: '5px'
		}
	}
};

function PhoneBookForm({ addEntryToPhoneBook }) {
	const initialState = {
		first: 'Coder',
		last: 'Byte',
		phone: '8885559999'
	};

	const [ first, setFirst ] = useState(initialState.first);
	const [ last, setLast ] = useState(initialState.last);
	const [ phone, setPhone ] = useState(initialState.phone);

	const handleSubmit = (e) => {
		e.preventDefault();
		addEntryToPhoneBook(first, last, phone);
		setFirst('');
		setLast('');
		setPhone('');
	};

	return (
		<form onSubmit={handleSubmit} style={style.form.container}>
			<label>First name:</label>
			<br />
			<input
				style={style.form.inputs}
				className="userFirstname"
				name="userFirstname"
				type="text"
				value={first}
				placeholder={first}
				onChange={(e) => setFirst(e.target.value)}
			/>
			<br />
			<label>Last name:</label>
			<br />
			<input
				style={style.form.inputs}
				className="userLastname"
				name="userLastname"
				type="text"
				value={last}
				placeholder={last}
				onChange={(e) => setLast(e.target.value)}
			/>
			<br />
			<label>Phone:</label>
			<br />
			<input
				style={style.form.inputs}
				className="userPhone"
				name="userPhone"
				type="text"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				placeholder={phone}
				required
			/>
			<br />
			<input style={style.form.submitBtn} className="submitButton" type="submit" value="Add User" />
		</form>
	);
}

function InformationTable({ entries }) {
	return (
		<table style={style.table} className="informationTable">
			<thead>
				<tr>
					<th style={style.tableCell}>First name</th>
					<th style={style.tableCell}>Last name</th>
					<th style={style.tableCell}>Phone</th>
				</tr>
			</thead>
			<tbody>
				{entries.sort((a, b) => a.last.localeCompare(b.last)).map((entry, i) => (
					<tr key={i}>
						<td>{entry.first}</td>
						<td>{entry.last}</td>
						<td>{entry.phone}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

const Application = (props) => {
	const [ entries, setEntries ] = useState([]);

	const addEntry = (first, last, phone) => {
		setEntries([ ...entries, { first, last, phone } ]);
	};

	return (
		<section>
			<PhoneBookForm addEntryToPhoneBook={addEntry} />
			<InformationTable entries={entries} />
		</section>
	);
};

ReactDOM.render(<Application />, document.getElementById('root'));
