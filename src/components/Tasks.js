import React from "react";
import Task from './Task';
import AddTask from './AddTask';
import { connect } from 'react-redux';
import { getAllTasks } from "../store/actions/getAllTasks";
import UpdateTask from "./UpdateTask";


// This component loads all tasks via api call
class Tasks extends React.Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    //
    //if(this.state.tasks.length === 0) this.props.getTasks();
    this.props.getTasks();
  }

  tasksList = (tasks) => {
    const list = tasks.map(task => {
      // must pass props here so we can access 'history' in each task 
      return <Task task={task} key={task.task_id} />;
    })
    return list;
  }
  
  render() {
    let list;
    if(this.props.tasks.length > 0) {
      // make list of tasks
      list = this.tasksList(this.props.tasks);
    } else {
      // no tasks message
      list = <h4 className="center">looks like you having nothing to do</h4>
    }
    return (
      <div className="">
        {
          this.props.updating ? (<UpdateTask />) : (<AddTask />)
        }
        {list}
      </div>
    );
  }
}

// map state of store to props of this component
const mapStateToProps = (state) => {
  // object we want to map to props of this component
  return {
    tasks: state.tasks,
    updating: state.updating
  }
}

// mapping dispatch to local component props
// dispatch is a redux method to allow state change using redux
const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => {
      dispatch(getAllTasks());
    }
  }
}

// used to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
