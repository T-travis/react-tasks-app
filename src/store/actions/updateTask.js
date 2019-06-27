import axios from 'axios';
 
export const updateTask = (task_id, task) => {
    return async (dispatch) => {
        try {
            const URL = '*************************';
            // update task
            await axios.put( (URL + '/' + task_id), { task: task});
            // get all call to db
            const results = await axios.get(URL);
            // then dispatch action get all
            dispatch({ type: 'GET_ALL', tasks: results.data });
        } catch(err) {
            console.log(err);
        }
    }
}