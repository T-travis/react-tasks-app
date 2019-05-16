import axios from 'axios';


export const deleteTask = (task_id) => {
    return async (dispatch) => {
        // delete db call 
        try {
            const URL = '*****************************';
            // detele from db
            await axios.delete(URL + '/' + task_id);
            // get all call to db
            const results = await axios.get(URL);
            // then dispatch action get all
            dispatch({ type: 'GET_ALL', tasks: results.data });
        } catch(err) {
            console.log(err);
        }
        // get all dispatch
    }
}