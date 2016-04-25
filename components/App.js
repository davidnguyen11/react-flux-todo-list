import uuid from 'node-uuid';
import React from 'react';
import Notes from  'components/note/Notes';


const notes = [
	{
		id: uuid.v4(),
		task: 'Learn Webpack'
	},
	{
		id: uuid.v4(),
		task: 'Learn React'
	},
	{
		id: uuid.v4(),
		task: 'Do laundry'
	}
];

class App extends React.Component {
	render() {
		return (
			<div>
				<Notes notes={notes} />
			</div>
		);
	}
}

export default App;
