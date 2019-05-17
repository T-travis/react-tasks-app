

export const editTask = (task_id, task, update) => {
    return (dispatch) => {
        dispatch({ type: 'EDIT_TASK', update: update, task_id: task_id, task: task });
    }
}