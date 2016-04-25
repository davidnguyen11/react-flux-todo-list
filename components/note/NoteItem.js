import React from 'react';


class Note extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			isEditing: false
		}
	}

	render(){
		const editing = this.state.isEditing;

		return (
			<div>
				{ editing ? this.renderEdit() : this.renderTask() }
			</div>
		)
	}

	renderTask = () => {
		const onDelete = this.props.onDelete;
		return (
			<div>
				<span onClick={this.setEditMode}>{this.props.task}</span>
				{onDelete ? this.renderDelete() : null}
			</div>
		)
	}

	renderEdit = () => {
		return (
			<div>
				<input 
					defaultValue={this.props.task}
					onBlur={this.handleFinishEdit}
					onKeyPress={this.checkEnter}
				/>
			</div>
		)
	}

	renderDelete = () => {
		return (
			<button onClick={this.props.onDelete}>x</button>
		)
	}

	checkEnter = (e) => {
		if(e.key === 'Enter'){
			this.handleFinishEdit(e);
		}
	}

	setEditMode = (e) => {
		this.setState({
			isEditing: true
		});
	}

	handleFinishEdit = (e) => {
		this.props.onEdit(e.target.value);
		this.setState({
			isEditing: false
		});
	}

}

export default Note;