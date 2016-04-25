import React from 'react';
import NoteItem from 'components/note/NoteItem';


class Notes extends React.Component {

	render(){
		const notes = this.props.notes;

		return (
			<div>
				<ul>
					{notes.map(this.renderNote)}
				</ul>
			</div>
		)
	}

	renderNote(note){
		return (
			<li key={note.id}>
				<NoteItem task={note.task} />
			</li>
		)
	}
}

export default Notes;