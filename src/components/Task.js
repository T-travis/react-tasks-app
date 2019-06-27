import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../store/actions/deleteTask";

// This component represents a individual tast object
class Tasks extends React.Component {

	// delete task
	handleClickDelete = task_id => {
		//console.log(task_id);
		if (window.confirm("Are you sure you want to delete this task?")) {
			// delete task
			this.props.delete(task_id);
		}
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


const mapDispatchToProps = dispatch => {
	return {
		delete: task_id => {
			dispatch(deleteTask(task_id));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Tasks);
