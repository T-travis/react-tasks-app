import axios from 'axios';

export const getTaskById = (task_id) => {
    return async (dispatch) => {
        try {
            const URL = 'https://api.travistackett.net/v1/tasks';
            const result = await axios.get(URL + '/' + task_id);
            //console.log(result.data);
            dispatch({ type: 'UPDATE_TASK', task: result.data.task });
        } catch(err) {
            console.log(err);
        }
    }
}