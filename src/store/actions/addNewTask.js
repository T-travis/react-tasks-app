import axios from 'axios';

export const addNewTask = (task) => {
    return async (dispatch) => {
        // make async db calls
        try {
            const URL = 'https://api.travistackett.net/v1/tasks';
            // add new task
            await axios.post(URL, { task: task });
            // get updated tasks
            const results = await axios.get(URL);
            // then dispatch action get all
            dispatch({ type: 'GET_ALL', tasks: results.data });
        } catch(err) {
            console.log(err);
        }
    }
}