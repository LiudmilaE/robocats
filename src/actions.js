import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOCATS_PENDING,
    REQUEST_ROBOCATS_SUCCESS,
    REQUEST_ROBOCATS_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobocats = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOCATS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: REQUEST_ROBOCATS_SUCCESS, payload: data}))
      .catch(error => dispatch({ type: REQUEST_ROBOCATS_FAILED, payload: error }))
}