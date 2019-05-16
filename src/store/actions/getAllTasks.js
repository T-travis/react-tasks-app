import axios from 'axios';

export const getAllTasks = () => {
    
    return async (dispatch) => {
        // make async call to db
        try {
            const URL = '***********************';
            const results = await axios.get(URL);
            // then dispatch action
            dispatch({ type: 'GET_ALL', tasks: results.data });
        } catch(err) {
            console.log(err);
        }
        
    }
}