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
				<button onClick={this.handleAddNote}>+</button>
				<Notes notes={notes} 
					onEdit={this.editNote} 
					onDelete={this.deleteNote}
				/>
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

	editNote = (noteId, task) => {
		console.log(`note edited: ${noteId} - ${task}`);
		const notes = this.state.notes;
		const noteIndex = this.findNote(noteId);

		if(noteIndex < 0) 
			return;

		notes[noteIndex].task = task;
		this.setState({notes});
	}

	deleteNote = (noteId) => {
		console.log(`Delete note: ${noteId}`);
		let notes = this.state.notes;
		const noteIndex = this.findNote(noteId);
		
		if(noteIndex < 0)
			return;

		notes.splice(noteIndex, 1);
		this.setState({notes});
	}

	findNote = (noteId) => {
		const notes = this.state.notes;
		const noteIndex = notes.findIndex((note) => note.id === noteId);

		if (noteIndex < 0){
			console.warn('Failed to find note', notes, id);
		}
		return noteIndex;
	}

}

export default App;
