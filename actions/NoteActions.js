import alt from 'utils/Dispatcher';


class NoteActions {
	constructor(){
		this.generateActions(
			'createNote',
			'editNote',
			'deleteNote'
		)
	}
}

export default alt.createActions(NoteActions);