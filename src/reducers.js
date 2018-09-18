import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOCATS_PENDING,
    REQUEST_ROBOCATS_SUCCESS,
    REQUEST_ROBOCATS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchCats = (state = initialStateSearch, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state;
    }
}

const initialStateRequest = {
    isPending: false,
    robocats: [],
    error: ''
}

export const requestRobocats = (state = initialStateRequest, action) => {
    switch (action.type) {
        case REQUEST_ROBOCATS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_ROBOCATS_SUCCESS:
            return {
                ...state,
                isPending: false,
                robocats: action.payload
            }
        case REQUEST_ROBOCATS_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state;
    }
}