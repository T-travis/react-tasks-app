

const initState = {
    tasks: [],
    updating: false,
    updateId: '',
    updateTask: ''
}

const rootReducer = (state = initState, action) => {

    if(action.type === 'GET_ALL') {
        //console.log(action.tasks)
        const newTasks = action.tasks;
        // upate state
        return {
            ...state,
            tasks: newTasks
        }
    } else if(action.type === 'EDIT_TASK') {
        //console.log(action.task_id);
        return {
            ...state,
            updating: action.update,
            updateId: action.task_id,
            updateTask: action.task
        }
    } else if(action.type === 'UPDATE_TASK') {
        //console.log('reducer', action.task)
        return {
            ...state,
            updateTask: action.task
        }
    } else if(action.type === 'END_UPDATING') {
        //console.log(action.stop)
        return {
            ...state,
            updating: action.stop
        }
    } else {
        return state;
    }
}

export default rootReducer;