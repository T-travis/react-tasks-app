import React from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../store/actions/addNewTask';


// This component is for adding tasks to the app
class AddTask extends React.Component {

    state = {
        // user input in the textarea
        input: ''
    }

    // update state as input is entered
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    // adds task updating the redux gobal state 
    handleSubmit = (event) => {
        event.preventDefault();
        // add new task to db
        this.props.addTask(this.state.input);
        // reset input 
        event.target.elements.inputID.value = "";
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="col l11 m11">
                        <input id="inputID" type="text" placeholder="add a new task..." onChange={this.handleChange} ></input>
                    </div>
                    <div className="col l1 m1">
                        <button type="submit" className="btn blue accent-4 add-button"><b>Add</b></button>
                    </div>
                </form>
            </div>
       )
    }
}

//
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => {
             dispatch(addNewTask(task));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTask);