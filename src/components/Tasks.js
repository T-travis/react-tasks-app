import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { getAllTasks } from "../store/actions/getAllTasks";
import { updateTask } from '../store/actions/updateTask';
import { addNewTask } from "../store/actions/addNewTask";

// This component loads all tasks via api call
class Tasks extends React.Component {
	state = {
		tasks: [],
		divRef: null,
		updating: false,
		task_id: '',
		task: ''
	};

	componentDidMount() {
		// get all tasks
		this.props.getTasks();
	}

	tasksList = tasks => {
		const list = tasks.map(task => {
			// must pass props here so we can access 'history' in each task
			return (
				<Task
          updateTriggered={this.updateTriggered}
					task={task}
					key={task.task_id}
				/>
			);
		});
		return list;
	};
  
  handleAddClick = (event) => {
    event.preventDefault();
    // add new task to db
    this.props.addTask(this.state.task);
    this.setState({
      task: '',
      task_id: ''
    })
  }

  handleUpdateClick = (event) => {
    event.preventDefault();
    // add new task to db
    this.props.update(this.state.task_id, this.state.task);
    // card is white when not updating
    this.state.divRef.setAttribute("class", "card-panel");
    this.setState({
      updating: false, // done updating
      task: '',
      task_id: ''
    });
  }

  handleInputChange = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  // response to update icon clicked in Task.js
  updateTriggered = (ref, task_id, task) => {
		this.setState({
			divRef: ref,
			updating: true,
			task_id: task_id,
			task: task
		});
	};

	render() {
		let list;
		if (this.props.tasks.length > 0) {
			// make list of tasks
			list = this.tasksList(this.props.tasks);
		} else {
			// no tasks message
			list = (
				<h4 className="center">looks like you having nothing to do</h4>
			);
		}
		return (
			<div>
				<div className="row">
					<form>
            <div className="col l11 m11">
							<input
                id="input-style"
                type="text"
                value={this.state.task}
								placeholder="add a new task..."
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="col l1 m1">
              {/* when updating show update button */}
							{this.state.updating ? (
								<div className="col l2 m2">
									<button
										onClick={this.handleUpdateClick}
										type="submit"
										className="btn grey accent-4 add-button"
									>
										<b>Update</b>
									</button>
								</div>
							) : (
								<button
                    onClick={this.handleAddClick}
									type="submit"
									className="btn blue accent-4 add-button"
								>
									<b>Add</b>
								</button>
							)}
						</div>
					</form>
				</div>

				{list}
			</div>
		);
	}
}

// map state of store to props of this component
const mapStateToProps = state => {
	// object we want to map to props of this component
	return {
		tasks: state.tasks
	};
};

// mapping dispatch to local component props
// dispatch is a redux method to allow state change using redux
const mapDispatchToProps = dispatch => {
	return {
    addTask: task => {
      dispatch(addNewTask(task));
    },
    update: (task_id, task) => {
      dispatch(updateTask(task_id, task));
    },
		getTasks: () => {
			dispatch(getAllTasks());
		}
	};
};

// used to connect this component with redux store
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Tasks);
