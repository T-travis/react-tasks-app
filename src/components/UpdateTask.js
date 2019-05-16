import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../store/actions/updateTask';

//
class UpdateTask extends React.Component {

    state = {
        input: ''
    }

    componentDidMount() {
        this.setState({
            input: this.props.location.state
        })
    }

    // update state as input is entered
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    // adds task updating the redux gobal state 
    handleSubmit = (event) => {
        event.preventDefault();
        // add new task to db
        this.props.update(this.props.match.params.task_id, this.state.input);
        // go back to tasks
        this.props.history.push('/')
    }

    render() {
       
        return (
            <div className="row">
                <h4 className='center-align'>Update Task</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="col l10 m10">
                        <input id="inputID" type="text" value={this.state.input} onChange={this.handleChange} ></input>
                    </div>
                    <div className="col l2 m2">
                        <button type="submit" className="btn grey accent-4 add-button"><b>Update</b></button>
                    </div>
                </form>
            </div>
        )
    }
}



//
const mapDispatchToProps = (dispatch) => {
    return {
        update: (task_id, task) => {
            dispatch(updateTask(task_id, task));
        }
    }
}


export default connect(null, mapDispatchToProps)(UpdateTask);