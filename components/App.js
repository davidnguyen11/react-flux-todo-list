import 'array.prototype.findindex';
import uuid from 'node-uuid';
import React from 'react';
import Notes from  'components/note/Notes';


class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			notes: [
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
			]
		}
	}

	render() {
		const notes = this.state.notes;
		return (
			<div>
				<button onClick={this.handleAddNote}>Add note</button>
				<Notes notes={notes} onEdit={this.editNote} />
			</div>
		);
	}

	handleAddNote = () => {
		this.setState({
			notes: this.state.notes.concat({
				id: uuid.v4(),
				task: 'New Task'
			})
		});
	}

	editNote = (nodeId, task) => {
		console.log(`note edited: ${nodeId} - ${task}`);
	}

}

export default App;
