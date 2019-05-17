

export const endUpdating = (stop) => {
    return (dispatch) => {
        dispatch({ type: 'END_UPDATING', stop: stop });
    }
}