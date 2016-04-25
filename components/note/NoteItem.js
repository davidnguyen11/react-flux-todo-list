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
		return (
			<div>
				<span onClick={this.setEditMode}>{this.props.task}</span>
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