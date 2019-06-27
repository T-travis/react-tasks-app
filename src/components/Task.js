import React from "react";

// This component represents a individual tast object
class Tasks extends React.Component {

	// delete task
	handleClickDelete = task_id => {
		this.props.deleteTask(task_id);
	};

	// edit task
	handleClickEdit = (task_id, task) => {
    // card is grey when editing
    this.divRef.setAttribute("class", "card-panel grey");
		this.props.updateTriggered(this.divRef, task_id, task);
	};

	render() {
		return (
			<div className="task">
				<div className="row">
                    <div className="card-panel" ref={div => this.divRef = div }>
						<p>
							{this.props.task.task}
							<i
								onClick={() => {
									this.handleClickDelete(
										this.props.task.task_id
									);
								}}
								className="right material-icons delete-icon-color"
							>
								delete
							</i>
							<i
								onClick={() => {
									this.handleClickEdit(
										this.props.task.task_id,
										this.props.task.task
									);
								}}
								className="right material-icons edit-icon-color"
							>
								create
							</i>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Tasks;