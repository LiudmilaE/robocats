import { apiCall } from './api/api';

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
    apiCall('https://jsonplaceholder.typicode.com/users')
      .then(data => dispatch({ type: REQUEST_ROBOCATS_SUCCESS, payload: data}))
      .catch(error => dispatch({ type: REQUEST_ROBOCATS_FAILED, payload: error }))
}