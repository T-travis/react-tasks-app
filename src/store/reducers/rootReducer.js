

const initState = {
    tasks: []
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
    } else {
        return state;
    }
}

export default rootReducer;