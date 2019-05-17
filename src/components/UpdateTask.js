import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../store/actions/updateTask';
import { getTaskById } from '../store/actions/getTaskById';
import { endUpdating } from '../store/actions/endUpdating';

//
class UpdateTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.setState({
            input: this.props.updateTask
        });
        this.textInput.current.focus();
    }


    // update state as input is entered
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    // adds task updating the redux gobal state 
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.endUpdate();
        // add new task to db
        this.props.update(this.props.updateId, this.state.input);
    }

    render() {
        //console.log('test', this.props.updateId, this.props.updateTask)
        return (
            <div className="row">
                <h4 className='center-align'>Update Task</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="col l10 m10">
                        <input
                            id="inputID" 
                            type="text" 
                            value={this.state.input} 
                            onChange={this.handleChange} 
                            ref={this.textInput} >   
                        </input>
                    </div>
                    <div className="col l2 m2">
                        <button type="submit" className="btn grey accent-4 add-button"><b>Update</b></button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        updateId: state.updateId,
        updateTask: state.updateTask
    }
}


//
const mapDispatchToProps = (dispatch) => {
    return {
        update: (task_id, task) => {
            dispatch(updateTask(task_id, task));
        },
        getTask: (task_id) => {
            dispatch(getTaskById(task_id));
        },
        endUpdate: () => {
            dispatch(endUpdating(false))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateTask);