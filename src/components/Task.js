import React from "react";
import { connect } from 'react-redux';
import { deleteTask } from '../store/actions/deleteTask';
import { editTask } from '../store/actions/editTask';

// This component represents a individual tast object
class Tasks extends React.Component {

    // delete task
    handleClickDelete = (task_id) => {
        //console.log(task_id);
        if(window.confirm('Are you sure you want to delete this task?')) {
            // delete task
            this.props.delete(task_id);
        } 
    }

    // edit task
    handleClickEdit = (task_id, task) => {
        this.props.edit(task_id, task);
    }


    render() {
        return (
            <div className="task">
                <div className="row">
                    <div className="card-panel" >
                        <p>{this.props.task.task}
                            <i
                               onClick={() => { this.handleClickDelete(this.props.task.task_id) } }
                               className="right material-icons delete-icon-color">
                               delete
                            </i>
                            <i 
                                onClick={() => { this.handleClickEdit(this.props.task.task_id, this.props.task.task) }}
                               className="right material-icons edit-icon-color">
                               create
                            </i>
                        </p>   
                    </div>
                </div>
            </div>
        );
        }
}

const mapStateToProps = (state) => {
    return {
        updating: state.updating
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (task_id) => {
            dispatch(deleteTask(task_id));
        },
        edit: (task_id, task) => {  
            // true sets the update status to true
            dispatch(editTask(task_id, task, true));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);