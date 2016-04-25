import alt from 'utils/Dispatcher';
import uuid from 'node-uuid';
import 'array.prototype.findindex';
import NoteActions from 'actions/NoteActions';


class NoteStore {
	constructor(){
		this.bindActions(NoteActions);
		this.notes = [];
	}

	createNote(note) {
		const notes = this.notes;
		note.id = uuid.v4();

		this.setState({
			notes: notes.concat(note)
		});
	}

	editNote({noteId, task}) {
		console.log(`note edited: ${noteId} - ${task}`);
		const notes = this.notes;
		const noteIndex = this.findNote(noteId);

		if(noteIndex < 0) 
			return;

		notes[noteIndex].task = task;
		this.setState({notes});
	}

	deleteNote(noteId) {
		console.log(`Delete note: ${noteId}`);
		let notes = this.notes;
		const noteIndex = this.findNote(noteId);
		
		if(noteIndex < 0)
			return;

		notes.splice(noteIndex, 1);
		this.setState({notes});
	}

	findNote(noteId){
		const notes = this.notes;
		const noteIndex = notes.findIndex((note) => note.id === noteId);

		if (noteIndex < 0){
			console.warn('Failed to find note', notes, id);
		}
		return noteIndex;
	}

}

export default alt.createStore(NoteStore, 'NoteStore');